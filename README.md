[![js-standard-style][js-standard-style_img]][js-standard-style_url]

[js-standard-style_img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style_url]: https://standardjs.com/

# Denúncia de ato ilegal contra ciclista

Aplicação móvel para submissão de queixa de ação ilegal contra ciclista, queixa essa efetuada junto de autoridade policial, ao abrigo do n.º 5 do art.º 170.º do Código da Estrada.

O código está desenhado em Javascript para ser corrido num smartphone. Para tal faz uso da plataforma <a href="https://cordova.apache.org/">Apache Cordova</a>.

* A APP para Android está <a href="https://play.google.com/store/apps/details?id=com.form.parking.violation">aqui</a>.

## Requisitos

### [Apache Cordova](https://cordova.apache.org/)

Este projeto faz uso de <a href="https://cordova.apache.org/">Apache Cordova</a> para converter código HTML5 e Javascript para uma aplicação de dispositivo móvel, como Android ou iOS. Precisa, portanto, de ter Apache Cordova instalado na sua máquina.

### [Node JS](https://nodejs.org/en/download/)

O projeto necessita de alguns pacotes `npm`, sendo que o `npm` vem instalado com o `nodejs`.
Alguns scripts do projeto também fazem uso do `nodejs`.

### [gradle](https://docs.gradle.org/current/userguide/what_is_gradle.html)

O gradle é usado para fazer o `build` dos projetos Apache Cordova

### Java

É uma exigência do Apache Cordova

### [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)

O ADB é usado para testar a APP no seu telemóvel Android

## Como instalar e testar

 1. Clone este projeto `git clone https://github.com/jfoclpf/bike-rider bike-rider`
 2. Entre na pasta recém criada `cd bike-rider`
 3. Adicione a plataforma. Para Android `cordova platform add android`.
 3. Corra `cordova build --release android` para construir o projeto na sua máquina. Em Android cria o ficheiro APK na pasta `platforms/android/build/outputs/apk`

### Testar num smartphone

Para testar num smartphone Android precisa de ativar nas configurações do smartphone o [Developer options](https://developer.android.com/studio/command-line/adb#Enabling) e dentro desse menu precisa de ativar a opção <b>USB debugging</b>.

Depois corra numa linha de comandos

`adb devices`

para listar os dispositivos Android detectados. Caso o dispositivo seja detetado, corra

`cordova run android --device`

Para fazer debug no Chrome aceda a `chrome://inspect/#devices`

## Eventuais problemas com Gradle

O [gradle](https://docs.gradle.org/current/userguide/what_is_gradle.html) é um executor de tarefas de compilação e é instalado aquando de `cordova build`. Pode dar problemas nesse comando (erro: `Could not determine java version from 'x.x.x'`). O gradle pode envolver diferentes versões:

- a versão global: `gradle -v`
- a versão local do project (wrapper): `./platforms/android/gradlew -v`

Tal pode dar problemas porque diferentes versões de gradle dependem de diferentes versões de java. Verificar a variável `JAVA_HOME` com `echo $JAVA_HOME`. Para resolver o problema mudar esta variável e associá-la a outras versões de java, por exemplo:

`export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/` ou<br>
`export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_131/` ou<br>
mesmo apagar com `export JAVA_HOME=`

## Plugins necessários

* ver ficheiro `package.json`.

## Contribuições são muito bem-vindas

 * respeite a estrutura dos ficheiros
 * comente sempre o código (preferencialmente em Inglês), tal ajuda os outros a compreender as suas contribuiçes
 * para identações, use sempre 4 espaços (não use 2 espaços, nem tabulaçes, ou seja TAB)

## Licença

GNU GPLv3<br>
http://www.gnu.org/licenses/gpl-3.0.en.html <br>
http://choosealicense.com/licenses/gpl-3.0/
