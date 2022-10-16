export const Animations = {
    AnimateBars : function (bar1_id,bar2_id,startSwap=true) {
        const bar1 = document.getElementById(`bar_${bar1_id}`);
        const bar2 = document.getElementById(`bar_${bar2_id}`);
        if(!startSwap) {
            bar1.style.background = 'cyan';
            bar2.style.background = 'cyan';
            return;
        }
        bar1.style.background = 'green';
        bar2.style.background = 'red';
    },
    AnimateSortedBar : function (i,j) {
        document.getElementById(`bar_${i}`).style.background = 'green';
        document.getElementById(`bar_${j}`).style.background = 'green';
    },
    sleep: function  (animationSpeed = 10) {
        return new Promise((resolve) => setTimeout(resolve,animationSpeed));
    }
}