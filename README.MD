加载图片，为了防止图片没载入，导致用户体验差。开始前和开始后都有回调函数
imgLoad.js. in order to prevent the picture from not loading, resulting in poor user experience. There are callback functions before and after the function works.

举例子：引入js文件：
        var imgData = [
            "img/closeBtn.png",
            "img/main.png",
            "img/mainBg.jpg",
        ]
        //假设为了使用百分比
        var flagNo = 0;
        imgLoad({
            "imgs": imgData,
            before: function () {
                console.log("开始加载图片")
            },
            // 每加载一步该怎么做
            singleStep: function () {
                flagNo++;
                // 加载的百分点
                var per = Math.floor(flagNo/imgData.length * 100)
                console.log(per)
            },
            // 图片完成该怎么做
            loadDone: function () {
                console.log("加载完成")
            }
        });
