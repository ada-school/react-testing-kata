<img align="right" src="https://github.com/ada-school/module-template/blob/main/ada.png">

## 🥋 KATA React TDD 🥋

## ¿Cómo empezar?

1. Lee los recursos iniciales y desafíos
2. Selecciona **una** restricción de la Kata para el siguiente desafío
3. Soluciona el desafío teniendo en cuenta los estandares de codificacion y la restricción
4. ¡**Diviértete!**
5. Si hay más desafíos, vuelve al paso 2

## Recursos Iniciales

En la carpeta [my-categories-app](/my-categories-app) podrás encontrar una aplicación vacía de react creada a partir de `create-react-app`

// TODO: react testing library - https://testing-library.com/docs/react-testing-library/intro

## Desafío 1

- Dado una fucion que devuelve un listado de subcategorias a partir de una categoria, crea un componente que liste categorias de manera vertical.

```
* Categoria 1
* Categoria 2
* Categoria 3
```

## Desafío 2

- Al hacer click en una categoria, el componente debe mostrar las subcategorias de primer nivel y mostrar la categoria seleccionada.

```
* Categoria 1
  - Subcategoria 1
  - Subcategoria 2
  - Subcategoria 3
```

- Al hacer click en una subcategoria de primer nivel, el componente debe mostrar las subcategorias de segundo nivel y mostrar la subcategoria de primer nivel seleccionada

```
* Subcategoria 1
  - Subcategoria 1.1
  - Subcategoria 1.2
  - Subcategoria 1.3
```

## Restricciones de la Kata

- Ping Pong (igual que ping pong pero hablando)
- [Ping Pong mudo](https://kata-log.rocks/mute-ping-pong)
- [Mob programming](https://kata-log.rocks/mob-programming)
  - Round Robin
  - Code of line: Round Robin
  - Conductor@ designad@s

## Estándares de codificación

- Hacer codigo inmutable
- Funciones con no mas de 8 lineas
- Usar solamente componentes funcionales
- Usar inyección de dependencias
