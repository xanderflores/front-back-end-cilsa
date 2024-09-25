// prettier-ignore
export const AnimationFade = (nameClass) => {
    const observer = new IntersectionObserver((entries) => {
        var t = 0
        entries.forEach(entry => {
            t = t + 0.2
            if(entry.isIntersecting) {
                if(nameClass === 'FadeDown') {
                    entry.target.classList.remove('fadeOutDown')
                    entry.target.classList.add('fadeInDown');
                } else if(nameClass === 'FadeUp') {
                    entry.target.classList.remove('fadeOutUp')
                    entry.target.classList.add('fadeInUp');
                } else if(nameClass === 'FadeLeft') {
                    entry.target.classList.remove('fadeOutLeft')
                    entry.target.classList.add('fadeInLeft');
                } else {
                    entry.target.classList.remove('fadeOutRight')
                    entry.target.classList.add('fadeInRight');
                }
                entry.target.style.animationDelay = t+'s'
            } else {
                if(nameClass === 'FadeDown') {
                    entry.target.classList.remove('fadeInDown');
                    entry.target.classList.add('fadeOutDown')
                } else if(nameClass === 'FadeUp') {
                    entry.target.classList.remove('fadeInUp');
                    entry.target.classList.add('fadeOutUp')
                } else if(nameClass === 'FadeLeft') {
                    entry.target.classList.remove('fadeInLeft');
                    entry.target.classList.add('fadeOutLeft')
                } else {
                    entry.target.classList.remove('fadeInRight');
                    entry.target.classList.add('fadeOutRight')
                }
                entry.target.style.animationDelay = null
            }
        })
    }, {
        rootMargin: '-150px',
        threshold: 1.0
    });
    
    if (document.getElementsByClassName(nameClass).length !== 0) {
        for (var i = 0; i < document.getElementsByClassName(nameClass).length; i++) {
            observer.observe(document.getElementsByClassName(nameClass)[i]);
        }
    }
}

// prettier-ignore
export const AnimationIn = (nameClass) => {
    const observer2 = new IntersectionObserver((entries) => {
        var t = 0
        entries.forEach(entry => {
            t = t + 0.2
            if(entry.isIntersecting) {
                if(nameClass === 'DownIn') {
                    entry.target.classList.remove('downOut')
                    entry.target.classList.add('downIn');
                } else if(nameClass === 'UpIn') {
                    entry.target.classList.remove('upOut')
                    entry.target.classList.add('upIn');
                } else if(nameClass === 'LeftIn') {
                    entry.target.classList.remove('leftOut');
                    entry.target.classList.add('leftIn')
                } else {
                    entry.target.classList.remove('rightOut')
                    entry.target.classList.add('rightIn');
                }
                entry.target.style.animationDelay = t+'s'
            } else {
                if(nameClass === 'DownIn') {
                    entry.target.classList.remove('downIn');
                    entry.target.classList.add('downOut')
                } else if(nameClass === 'UpIn') {
                    entry.target.classList.remove('upIn');
                    entry.target.classList.add('upOut')
                } else if(nameClass === 'LeftIn') {
                    entry.target.classList.remove('leftIn');
                    entry.target.classList.add('leftOut')
                } else {
                    entry.target.classList.remove('rightIn');
                    entry.target.classList.add('rightOut')
                }
                entry.target.style.animationDelay = null
            }
        })
    }, {
        // rootMargin: '10px',
        // threshold: 0.0
    });
    
    if (document.getElementsByClassName(nameClass).length !== 0) {
        for (var i = 0; i < document.getElementsByClassName(nameClass).length; i++) {
            observer2.observe(document.getElementsByClassName(nameClass)[i]);
        }
    }
}

// prettier-ignore
export const FadeIn = (nameClass) => {
    const observer2 = new IntersectionObserver((entries) => {
        var t = 0
        entries.forEach(entry => {
            t = t + 0.2
            if(entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                entry.target.classList.remove('fadeOut');
            } else {
                entry.target.classList.add('fadeOut');
                entry.target.classList.remove('fadeIn');
            }
        })
    }, {
        // rootMargin: '0px',
        // threshold: 0.0
    });
    
    if (document.getElementsByClassName(nameClass).length !== 0) {
        for (var i = 0; i < document.getElementsByClassName(nameClass).length; i++) {
            observer2.observe(document.getElementsByClassName(nameClass)[i]);
        }
    }
}
