
//Canvas DOM manipulation
var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")

//Variables
var game_started = false
var current_location
var btn_start_game = [canvas.width/2 - 100, canvas.height/2, 200, 50]
var btn_color_picker = [canvas.width/2 - 100, canvas.height/16*11, 200, 50]
var btn_back = [canvas.width/2-100, canvas.height/24*21+18, 200, 25]
var btn_map1 = [canvas.width/3-45, canvas.height/4, 90, 90]
var btn_map2 = [canvas.width/3*2-45, canvas.height/4, 90, 90]
var btn_map3 = [canvas.width/3-45, canvas.height/2, 90, 90]
var btn_map4 = [canvas.width/3*2-45, canvas.height/2, 90, 90]
var btn_colors = [
    [canvas.width/5-25, canvas.height/4, 50, 50], 
    [canvas.width/5*2-25, canvas.height/4, 50, 50],
    [canvas.width/5*3-25, canvas.height/4, 50, 50],
    [canvas.width/5*4-25, canvas.height/4, 50, 50],
    [canvas.width/5-25, canvas.height/16*7, 50, 50],
    [canvas.width/5*2-25, canvas.height/16*7, 50, 50],
    [canvas.width/5*3-25, canvas.height/16*7, 50, 50],
    [canvas.width/5*4-25, canvas.height/16*7, 50, 50],
    [canvas.width/5-25, canvas.height/8*5, 50, 50],
    [canvas.width/5*2-25, canvas.height/8*5, 50, 50],
    [canvas.width/5*3-25, canvas.height/8*5, 50, 50],
    [canvas.width/5*4-25, canvas.height/8*5, 50, 50]
]
var update_interval 
var render_interval
var color = "white"

//Call init function
init()

//Game set up function
function gameSetup(level){
    //reset
    //set current location
    current_location = level
    //create entities
    //start game loop
    update_interval = setInterval(function(){ update() }, 10/1000)
    render_interval = setInterval( function(){ render(ctx) }, 30/1000)
    game_started = true
}

//Stop game function
function stopGame(){
    game_started =  false
    clearInterval(update_interval)
    clearInterval(render_interval)
    init()
}

//Event listener for "Start Game" and "Color Picker" buttons
canvas.addEventListener("mouseup", function(evt){
    //Check mouse locations
    var mouse_x = evt.offsetX
    var mouse_y = evt.offsetY

    //Current Location: Menu
    if(current_location == "menu"){
        //start game button
        if ((mouse_x >= btn_start_game[0] && mouse_x <= btn_start_game[0] + btn_start_game[2])
        &&(mouse_y >= btn_start_game[1] && mouse_y <= btn_start_game[1] + btn_start_game[3])){
            console.log("Start Game")
            renderLevelSelector()
            return
        }
        //color picker button
        if ((mouse_x >= btn_color_picker[0] && mouse_x <= btn_color_picker[0] + btn_color_picker[2])
        &&(mouse_y >= btn_color_picker[1] && mouse_y <= btn_color_picker[1] + btn_color_picker[3])){
            console.log("Color Picker")
            renderColorPicker()
            return
        }
    }

    //Current Location: Level Selector & Color Picker
    if (current_location == "level selector" || current_location == "color picker") {
        //back button
        if ((mouse_x >= btn_back[0] && mouse_x <= btn_back[0] + btn_back[2])
        &&(mouse_y >= btn_back[1] && mouse_y <= btn_back[1] + btn_back[3])){
            console.log("Back")
            init()
            return
        }
    }
    
    //Current Location: Level Selector
    if (current_location == "level selector") {
        //tutorial/map1
        if ((mouse_x >= btn_map1[0] && mouse_x <= btn_map1[0] + btn_map1[2])
        &&(mouse_y >= btn_map1[1] && mouse_y <= btn_map1[1] + btn_map1[3])){
            console.log("Map 1")
            gameSetup("1")
            return
        }
        //map2
        if ((mouse_x >= btn_map2[0] && mouse_x <= btn_map2[0] + btn_map2[2])
        &&(mouse_y >= btn_map2[1] && mouse_y <= btn_map2[1] + btn_map2[3])){
            console.log("Map 2")
            gameSetup("2")
            return
        }
        //map3
        if ((mouse_x >= btn_map3[0] && mouse_x <= btn_map3[0] + btn_map3[2])
        &&(mouse_y >= btn_map3[1] && mouse_y <= btn_map3[1] + btn_map3[3])){
            console.log("Map 3")
            gameSetup("3")
            return
        }
        //map4
        if ((mouse_x >= btn_map4[0] && mouse_x <= btn_map4[0] + btn_map4[2])
        &&(mouse_y >= btn_map4[1] && mouse_y <= btn_map4[1] + btn_map4[3])){
            console.log("Map 4")
            gameSetup("4")
            return
        }
    }

    //Current Location: Color Picker
    if (current_location == "color picker") {
        //color1
        if ((mouse_x >= btn_colors[0][0] && mouse_x <= btn_colors[0][0] + btn_colors[0][2])
        &&(mouse_y >= btn_colors[0][1] && mouse_y <= btn_colors[0][1] + btn_colors[0][3])){
            console.log("white")
            color = "white"
            return
        }
        //color2
        if ((mouse_x >= btn_colors[1][0] && mouse_x <= btn_colors[1][0] + btn_colors[1][2])
        &&(mouse_y >= btn_colors[1][1] && mouse_y <= btn_colors[1][1] + btn_colors[1][3])){
            console.log("yellow")
            color = "yellow"
            return
        }
        //color3
        if ((mouse_x >= btn_colors[2][0] && mouse_x <= btn_colors[2][0] + btn_colors[2][2])
        &&(mouse_y >= btn_colors[2][1] && mouse_y <= btn_colors[2][1] + btn_colors[2][3])){
            console.log("red")
            color = "red"
            return
        }
        //color4
        if ((mouse_x >= btn_colors[3][0] && mouse_x <= btn_colors[3][0] + btn_colors[3][2])
        &&(mouse_y >= btn_colors[3][1] && mouse_y <= btn_colors[3][1] + btn_colors[3][3])){
            console.log("blue")
            color = "blue"
            return
        }
        //color5
        if ((mouse_x >= btn_colors[4][0] && mouse_x <= btn_colors[4][0] + btn_colors[4][2])
        &&(mouse_y >= btn_colors[4][1] && mouse_y <= btn_colors[4][1] + btn_colors[4][3])){
            console.log("orange")
            color = "orange"
            return
        }
        //color6
        if ((mouse_x >= btn_colors[5][0] && mouse_x <= btn_colors[5][0] + btn_colors[5][2])
        &&(mouse_y >= btn_colors[5][1] && mouse_y <= btn_colors[5][1] + btn_colors[5][3])){
            console.log("lime")
            color = "lime"
            return
        }
        //color7
        if ((mouse_x >= btn_colors[6][0] && mouse_x <= btn_colors[6][0] + btn_colors[6][2])
        &&(mouse_y >= btn_colors[6][1] && mouse_y <= btn_colors[6][1] + btn_colors[6][3])){
            console.log("pink")
            color = "pink"
            return
        }
        //color8
        if ((mouse_x >= btn_colors[7][0] && mouse_x <= btn_colors[7][0] + btn_colors[7][2])
        &&(mouse_y >= btn_colors[7][1] && mouse_y <= btn_colors[7][1] + btn_colors[7][3])){
            console.log("black")
            color = "black"
            return
        }
        //color9
        if ((mouse_x >= btn_colors[8][0] && mouse_x <= btn_colors[8][0] + btn_colors[8][2])
        &&(mouse_y >= btn_colors[8][1] && mouse_y <= btn_colors[8][1] + btn_colors[8][3])){
            console.log("cyan")
            color = "cyan"
            return
        }
        //color10
        if ((mouse_x >= btn_colors[9][0] && mouse_x <= btn_colors[9][0] + btn_colors[9][2])
        &&(mouse_y >= btn_colors[9][1] && mouse_y <= btn_colors[9][1] + btn_colors[9][3])){
            console.log("brown")
            color = "brown"
            return
        }
        //color11
        if ((mouse_x >= btn_colors[10][0] && mouse_x <= btn_colors[10][0] + btn_colors[10][2])
        &&(mouse_y >= btn_colors[10][1] && mouse_y <= btn_colors[10][1] + btn_colors[10][3])){
            console.log("purple")
            color = "purple"
            return
        }
        //color12
        if ((mouse_x >= btn_colors[11][0] && mouse_x <= btn_colors[11][0] + btn_colors[11][2])
        &&(mouse_y >= btn_colors[11][1] && mouse_y <= btn_colors[11][1] + btn_colors[11][3])){
            console.log("green")
            color = "green"
            return
        }
    }
})