function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=m5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' , modelReady)

}

function modelReady(){
    classifier.classifly(gotResults);
}