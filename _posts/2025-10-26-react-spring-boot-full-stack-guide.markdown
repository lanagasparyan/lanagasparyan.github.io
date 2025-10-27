---
layout: post
title: "React + Spring Boot: A Full-Stack Developer's Guide"
date: 2025-10-26 14:00:00 -0400
categories: [Tutorials, Full-Stack]
tags: [React, Spring Boot, Java, JavaScript, REST API, Full-Stack, TypeScript]
author: lana
excerpt: "A comprehensive guide to building full-stack applications with React and Spring Boot. Learn best practices for API design, state management, authentication, and deployment based on real production experience."
---

After building multiple production applications with React and Spring Boot serving 65K+ annual users, I've learned that success lies not just in knowing these technologies, but in understanding how they work together effectively. This guide shares practical patterns and best practices from real-world projects.

## Why React + Spring Boot?

This combination offers compelling advantages:

- **React**: Modern, component-based UI with excellent developer experience
- **Spring Boot**: Robust backend framework with extensive ecosystem
- **Type Safety**: TypeScript + Java provide compile-time safety
- **Ecosystem**: Massive community support and third-party libraries
- **Scalability**: Both technologies scale well for enterprise applications

## Project Structure

A well-organized project structure is crucial. Here's what works in production:

```
my-app/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/myapp/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       ├── service/
│   │   │   │       ├── repository/
│   │   │   │       ├── model/
│   │   │   │       ├── dto/
│   │   │   │       └── exception/
│   │   │   └── resources/
│   │   │       └── application.yml
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── types/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
└── docker-compose.yml
```

## Backend: Spring Boot Setup

### 1. Spring Boot Dependencies

Start with these essential dependencies in your `pom.xml`:

```xml
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Boot Starter Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- Spring Boot Starter Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <!-- PostgreSQL Driver -->
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Lombok (reduces boilerplate) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Validation -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
</dependencies>
```

### 2. RESTful API Design

Design clean, predictable REST endpoints:

```java
@RestController
@RequestMapping("/api/recipes")
@RequiredArgsConstructor
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class RecipeController {

    private final RecipeService recipeService;

    @GetMapping
    public ResponseEntity<Page<RecipeDTO>> getAllRecipes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String category) {

        Pageable pageable = PageRequest.of(page, size);
        Page<RecipeDTO> recipes = recipeService.findAll(category, pageable);
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDTO> getRecipe(@PathVariable Long id) {
        return recipeService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<RecipeDTO> createRecipe(
            @Valid @RequestBody CreateRecipeRequest request,
            @AuthenticationPrincipal UserDetails user) {

        RecipeDTO recipe = recipeService.create(request, user.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED).body(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeDTO> updateRecipe(
            @PathVariable Long id,
            @Valid @RequestBody UpdateRecipeRequest request,
            @AuthenticationPrincipal UserDetails user) {

        RecipeDTO recipe = recipeService.update(id, request, user.getUsername());
        return ResponseEntity.ok(recipe);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails user) {

        recipeService.delete(id, user.getUsername());
        return ResponseEntity.noContent().build();
    }
}
```

**Key patterns:**
- Use DTOs to separate API models from entities
- Implement pagination for list endpoints
- Validate input with `@Valid`
- Return appropriate HTTP status codes
- Handle authentication at controller level

### 3. Service Layer Best Practices

Keep business logic in the service layer:

```java
@Service
@RequiredArgsConstructor
@Transactional
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final RecipeMapper recipeMapper;

    @Transactional(readOnly = true)
    public Page<RecipeDTO> findAll(String category, Pageable pageable) {
        if (category != null) {
            return recipeRepository
                    .findByCategory(category, pageable)
                    .map(recipeMapper::toDTO);
        }
        return recipeRepository
                .findAll(pageable)
                .map(recipeMapper::toDTO);
    }

    public RecipeDTO create(CreateRecipeRequest request, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(username));

        Recipe recipe = recipeMapper.toEntity(request);
        recipe.setAuthor(user);
        recipe.setCreatedAt(LocalDateTime.now());

        Recipe saved = recipeRepository.save(recipe);
        return recipeMapper.toDTO(saved);
    }

    public RecipeDTO update(Long id, UpdateRecipeRequest request, String username) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RecipeNotFoundException(id));

        // Authorization check
        if (!recipe.getAuthor().getUsername().equals(username)) {
            throw new UnauthorizedException("You can only update your own recipes");
        }

        recipeMapper.updateEntity(recipe, request);
        recipe.setUpdatedAt(LocalDateTime.now());

        Recipe updated = recipeRepository.save(recipe);
        return recipeMapper.toDTO(updated);
    }
}
```

**Best practices:**
- Use `@Transactional` for data consistency
- Separate read-only transactions for optimization
- Throw meaningful exceptions
- Implement authorization checks in service layer

### 4. CORS Configuration

Configure CORS properly for development and production:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.cors.allowed-origins}")
    private String[] allowedOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(allowedOrigins)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
```

In `application.yml`:

```yaml
app:
  cors:
    allowed-origins:
      - http://localhost:3000  # Development
      - https://myapp.com      # Production
```

## Frontend: React Setup

### 1. API Service Layer

Create a dedicated service for API calls:

```typescript
// src/services/api.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    // Request interceptor for auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export default new ApiService();
```

### 2. Type-Safe API Client

Define TypeScript interfaces for type safety:

```typescript
// src/types/recipe.ts
export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  imageUrl?: string;
  author: {
    id: number;
    username: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateRecipeRequest {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  imageUrl?: string;
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

// src/services/recipeService.ts
import api from './api';
import { Recipe, CreateRecipeRequest, Page } from '../types/recipe';

export const recipeService = {
  getAll: (page = 0, size = 20, category?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      ...(category && { category }),
    });
    return api.get<Page<Recipe>>(`/recipes?${params}`);
  },

  getById: (id: number) => {
    return api.get<Recipe>(`/recipes/${id}`);
  },

  create: (data: CreateRecipeRequest) => {
    return api.post<Recipe>('/recipes', data);
  },

  update: (id: number, data: Partial<CreateRecipeRequest>) => {
    return api.put<Recipe>(`/recipes/${id}`, data);
  },

  delete: (id: number) => {
    return api.delete<void>(`/recipes/${id}`);
  },
};
```

### 3. Custom React Hooks

Create reusable hooks for data fetching:

```typescript
// src/hooks/useRecipes.ts
import { useState, useEffect } from 'react';
import { recipeService } from '../services/recipeService';
import { Recipe, Page } from '../types/recipe';

export const useRecipes = (page = 0, category?: string) => {
  const [data, setData] = useState<Page<Recipe> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const result = await recipeService.getAll(page, 20, category);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [page, category]);

  return { data, loading, error };
};

// src/hooks/useRecipe.ts
import { useState, useEffect } from 'react';
import { recipeService } from '../services/recipeService';
import { Recipe } from '../types/recipe';

export const useRecipe = (id: number) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const result = await recipeService.getById(id);
        setRecipe(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  return { recipe, loading, error };
};
```

### 4. Component Example

Build clean, reusable components:

```typescript
// src/components/RecipeCard.tsx
import React from 'react';
import { Recipe } from '../types/recipe';
import './RecipeCard.css';

interface RecipeCardProps {
  recipe: Recipe;
  onDelete?: (id: number) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onDelete }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="recipe-card">
      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      )}
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-meta">
          <span className="recipe-time">
            <i className="far fa-clock"></i> {totalTime} min
          </span>
          <span className="recipe-servings">
            <i className="fas fa-utensils"></i> {recipe.servings} servings
          </span>
          <span className="recipe-category">{recipe.category}</span>
        </div>

        <div className="recipe-author">
          {recipe.author.avatar && (
            <img src={recipe.author.avatar} alt={recipe.author.username} />
          )}
          <span>By {recipe.author.username}</span>
        </div>

        {onDelete && (
          <button
            onClick={() => onDelete(recipe.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
```

## Authentication with JWT

### Backend: JWT Security

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors()
            .and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            .and()
            .addFilterBefore(jwtAuthFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

### Frontend: Auth Context

```typescript
// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token and set user
      verifyToken(token);
    }
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem('authToken', token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

## Deployment

### Docker Compose for Local Development

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/myapp
      SPRING_DATASOURCE_USERNAME: user
      SPRING_DATASOURCE_PASSWORD: password
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

## Lessons from Production

After deploying multiple React + Spring Boot applications, here's what I've learned:

1. **Always use DTOs**: Never expose JPA entities directly in APIs
2. **Implement proper error handling**: Both backend exceptions and frontend error boundaries
3. **Optimize database queries**: Use pagination, indexing, and lazy loading
4. **Monitor performance**: Track API response times and frontend bundle size
5. **Write tests**: Unit tests for service layer, integration tests for APIs
6. **Use environment variables**: Never hardcode configurations
7. **Implement logging**: Structured logging saves debugging time

## Conclusion

React and Spring Boot form a powerful full-stack combination when used correctly. Focus on clean architecture, type safety, and proper error handling. The patterns shared here have proven effective in production applications serving thousands of users.

The complete PlatePals project showcasing these patterns is available on my [GitHub](https://github.com/lanagasparyan). Feel free to explore the code and reach out with questions!

---

**What's your preferred full-stack combination?** Share your thoughts in the comments!
