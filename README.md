# 🎬 API REST de Películas con Flask

# 📜 Descripción
Esta aplicación permite acceder a datos de películas extraídas desde `IMDb movies.csv`.  
Los datos se cargan automáticamente y se pueden filtrar por título.

# 🚀 Instalación y ejecución

## Backend

### 1️⃣ Ir al directorio del backend
```bash
cd backend
```

### 2️⃣ Configurar el entorno virtual
```bash
python -m venv .venv
source .venv/bin/activate  # En macOS/Linux
.venv\Scripts\activate     # En Windows
```

### 3️⃣ Instalar dependencias
```bash
pip install -r requirements.txt
```

### 4️⃣ Ejecutar la API
```bash
python app.py
```

La API se ejecutará en http://127.0.0.1:5000/

### 📡 Endpoints
GET /movies
Este endpoint retorna una lista con las películas disponibles en el CSV en formato JSON.
```bash
curl -X GET http://127.0.0.1:5000/movies
```

GET /movies?title=
Este endpoint permite buscar películas cuyo título contenga el texto especificado.
```bash
curl -X GET "http://127.0.0.1:5000/movies?title=Inception"
```

### 🧪 Testing

```bash
pytest test_app.py
```

## Frontend

### 1️⃣ Ir al directorio del frontend
```bash
cd frontend
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar la aplicación
```bash
npm run dev
```

La aplicación se ejecutará en http://localhost:5173/

# 💡 Posibles mejoras
Los requisitos indican que la API debe cargar los datos desde el archivo CSV proporcionado. Se podría optimizar el backend pasando la lista de películas del archivo .csv a una base de datos.

Se podría usar Docker para facilitar la configuración y despliegue del proyecto.

# 📌 Repositorio en GitHub
Puedes ver el código completo aquí: [Movie Data Visualizer](https://github.com/sarodruiz/movie-data-visualizer)
