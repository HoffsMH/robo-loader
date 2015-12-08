require
function Board(game_settings();) {

  this.loading_area = new Loadingarea(game_settings.loadiing_area_settings)

}
module.exports = Board
