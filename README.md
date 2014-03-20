#Sfoti.py

Proyecto del [Curso Profesional de Frontend](http://mejorando.la/frontend)
de [Mejorando.la](http://mejorando.la).

Ésta es una versión alternativa del respositorio oficial del proyecto disponible
en [Stofipy/stofipy](http://github.com/Stofipy/stofipy.git), recopilando lo
mejor de las clases América y Europa y nuevas herramientas que se dan en las
clases BONUS y en las discusiones de la plataforma.

##Instalación
Se necesita tener instalado en nuestro equipo: [Node.js](http://nodejs.org/downloads)

Si tienes MAC, puedes instalarlo con homebrew:
```sh
# Instala Homebrew en tu equipo
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
# Instala Node con Brew
$ brew install node
```
Una vez tenemos Node instalado, podemos instalar las siguientes dependencias
globalmente ya que las utilizaremos en varios proyectos
```
$ sudo npm install -g stylus
$ sudo npm install -g grunt
$ sudo npm install -g grunt-cli
```

##Ejecución
Para arrancar el proyecto, primero necesitamos instalar las dependencias de
desarrollo que hemos definido en el `package.json` lo hacemos con
```
$ npm install
```
Entonces ya podemos correr el servidor y empezar a desarrollar el frontend e ir visualizando los cambios, lo hacemos con la tarea por defecto de `Grunt`
```
$ grunt
```
Esto nos abrirá por defecto una ventana del navegador en la URL [http://0.0.0.0:9000](http://0.0.0.0:9000) y gracias a `livereload` podemos ver los cambios son necesidad de recargar la
página
