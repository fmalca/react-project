# Proyecto del curso de React en Coderhouse
  Desafío Contexto
  Se agregó un contexto (CartContext) a la aplicación
  Se agregó la funcionalidad de agregar un item al carrito
  

# Dependencias
  react-bootstrap (ya he trabajado con bootstrap)
  react-icons
  
# Estructura general de la aplicación

- App : Definición de rutas
        /                   --> ItemListContainer
        /categoria/:idCat   --> ItemListContainer
        /detalle/:id        --> ItemDetailContainer
        /cart               --> Cart 

- ItemListContainer     : Carga los datos y llama a ItemList
- ItemList              : Lista cada dato llamando a Item (es una lista de Item)
- Item                  : Muestra los datos del item. Cada Item tiene un botón que llama a ItemDetailContainer
                          para mostrar información detallada del item
- ItemDetailContainer   : Carga la información del item y lo muestra a través de ItemDetail
- ItemDetail            : Muestra información detallada del item. Tiene un botón para agregar al carrito de compras
- ItemCounter           : Agrega los ítems de un determinado producto al carrito de compras
- Cart                  : Muestra los elementos en el carrito de compras


                      

