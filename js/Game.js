class Game {
  constructor() {}

  //Lee el estado del juego
  getState() {
   
  }
  //actualiza el estado del juego
  update(state) {
   
  }

  // AM
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //crear sprites de los carros
  }

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
  
    //agrega estilo al titulo de la imagen
  }

  //AA
  play() {
    this.handleElements();

    //Player.getPlayersInfo();

   /*  if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      // Indice del arreglo
      var index = 0;
      for (var plr in allPlayers) {
        // Usa los datos de la base de datos para mostrar los carros en las direcciones x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;

        // Agrega 1 al indice por cada ciclo
        index = index + 1;
      }

      // handling keyboard events
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
 */
      drawSprites();
    }
  }

