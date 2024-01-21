const calculateFormEl=document.getElementById("CalculateForm");
const resultEl=document.getElementById("result");

const calculateMarks = (event)=>{
    const maxMarks=400;
    event.preventDefault();

    const formData=new FormData(calculateForm);

    const data={};
    formData.forEach((value,key)=>{
        data[key]=+value;
    });
    const totalMarks=data.Maths+data.Science+data.Hindi+data.English;
    
    const percentage=Math.round(((totalMarks/maxMarks)*100)*100)/(100)
    console.log(totalMarks,percentage);

    
    resultEl.innerText=`You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`
    
};
