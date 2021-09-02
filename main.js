function preload(){
}

function setup()
{
    canvas= createCanvas(850, 560);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();


}

function draw()
{
    image(video, 200, 200, 300, 290);
    fill(225, 200, 160);
    stroke(300, 300, 300);
    circle(50, 50, 75);

    fill(205, 255, 130);
    stroke(300, 300, 300);
    circle(790, 50, 75);

    fill(225, 120, 200);
    stroke(300, 300, 300);
    circle(790, 520, 75);

    fill(245, 25, 10);
    stroke(300, 300, 300);
    circle(50, 520, 75);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(81, 33, 678, 32, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(35, 80, 32, 410, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(775, 80, 32, 410, 8);

    fill(0, 0, 175);
    stroke(300, 300, 300);
    rect(81, 505, 678, 32, 8);
}

function take_snapshot()
{
    save('student_name.png');
}
