function CompareTime(t1,t2){
    const t1date=new Date(t1);
    const t2date=new Date(t2);
    return t1date.getTime()>t2date.getTime();
}
module.exports={CompareTime}