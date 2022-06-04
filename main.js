function preload(){

}

function setup(){
    canvas=createCanvas(800,400);
    canvas.position(100,250);
    circle(40, 40, 60);
    circle(40, 350, 60);
    circle(750, 350, 60);
    circle(750, 40, 60);
    rect(35, 70, 10, 250);
    rect(745, 70, 10, 250);  
    rect(70, 350,650, 10);
    rect(70, 35,650, 10);
    
    

    tint_color="";
}

function draw(){
    image(video,0,0,700,500);
    tint(tint_color);
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;

}

function take_snapshot(){
    save("image.png");
}