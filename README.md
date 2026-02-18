# 🔴 PokéPro Dashboard

![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**PokéPro** es una aplicación moderna de gestión de equipos Pokémon. Utiliza la arquitectura de componentes de React junto con TypeScript para ofrecer una experiencia de usuario fluida, robusta y con persistencia de datos local.

![Demo de la aplicación](./public/screenshot.png)

## ✨ Características Clave

### 🛠 Ingeniería de Software

- **Arquitectura Limpia:** Separación estricta entre Lógica (Hooks), UI (Components) y Servicios (API).
- **Persistencia de Datos:** Implementación de `LocalStorage` con inicialización perezosa (Lazy State) para asegurar que el equipo Pokémon no se pierda al recargar.
- **Manejo de Estados:** Control de estados asíncronos (`loading`, `error`, `success`) encapsulados en custom hooks.

### 🎮 Funcionalidades para el Usuario

- **Buscador en Tiempo Real:** Conexión directa a la [PokéAPI](https://pokeapi.co/) para obtener estadísticas e imágenes oficiales.
- **Gestión de Equipo (CRUD):** \* Agregar Pokémon (Validación de duplicados y límite de 6 integrantes).
  - Eliminar integrantes del equipo.
- **Feedback Interactivo:** Notificaciones "Toast" para confirmar capturas o alertar errores.

## 📂 Estructura del Proyecto

El proyecto sigue un patrón modular escalable:

```bash
src/
├── components/          # Componentes de UI reutilizables
│   └── pokemon/
│       ├── SearchBar.tsx    # Input controlado
│       ├── PokemonCard.tsx  # Tarjeta con composición (Children props)
│       └── PokemonList.tsx  # Grid responsivo del equipo
├── hooks/               # Lógica de Negocio (Custom Hooks)
│   ├── usePokemon.ts        # Fetching y manejo de errores de API
│   └── useTeam.ts           # Lógica de persistencia y reglas de negocio
├── services/            # Comunicación externa
│   └── pokemonService.ts    # Cliente HTTP (Fetch API)
├── types/               # Definiciones de TypeScript
│   └── pokemon.ts           # Interfaces estrictas
└── App.tsx              # Layout Principal

🧠 Aprendizajes y Decisiones Técnicas
Composition Pattern: Se utilizó la prop children en PokemonCard para reutilizar la misma tarjeta tanto en la búsqueda (botón "Capturar") como en el equipo (botón "Eliminar"), evitando duplicidad de código.

Lift State Up: El estado de la búsqueda se elevó a App.tsx para coordinar la comunicación entre el buscador y la visualización de resultados.

Custom Hooks: Se abstrajo toda la lógica en useTeam y usePokemon para mantener los componentes visuales limpios y fáciles de leer.

Desarrollado con ❤️ por Carlos Canelón
Estudiante de Ingeniería Informática | Frontend Developer
```
