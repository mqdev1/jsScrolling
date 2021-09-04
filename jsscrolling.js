class jssc{
    static init(anims){
        if(undefined == anims || null == anims)return;
        window.onscroll = function()
        {
            let y = this.scrollY + 100;
            anims.forEach(anim => {
                let q = document.querySelectorAll(anim.name);
                q.forEach(qItem=>{
                        let top = qItem.offsetTop;
                        let h = qItem.offsetHeight;
                        if(undefined !== anim.whenscroll && null !== anim.whenscroll)
                        {
                            if(y <= (top + h))
                            {
                                anim.whenscroll(qItem);
                            }
                        }
                        if(undefined !== anim.whenoutscroll && null !== anim.whenoutscroll)
                        {
                            if(y >= (top + (h-3)) || (y-10) < top)
                            {
                                anim.whenoutscroll(qItem);
                            }
                        }
                });
            });
        }
    }
}