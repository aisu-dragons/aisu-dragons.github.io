var previewImgRuleset = $('#final-ruleset-gallery .iou-gallery-slider-previews .iou-gallery-slider-preview img');
var previewImgBoard = $('#board-prototype-gallery .iou-gallery-slider-previews .iou-gallery-slider-preview img');
var bigImgRuleset = $('#final-ruleset-gallery .iou-gallery-slider-big-img img');
var bigImgBoard = $('#board-prototype-gallery .iou-gallery-slider-big-img img');
var arrowLeft = $('.arrow_left');
var arrowRight = $('.arrow_right');

var currentIndex = new Array(arrowLeft.length).fill(0);
var previewImg = [previewImgRuleset, previewImgBoard];
var bigImg = [bigImgRuleset, bigImgBoard];

previewImgRuleset.on('click', function () {
    var src = $(this).attr('src');

    bigImg[0].fadeOut(100, function () {
        bigImg[0].attr('src', src);
    });
    bigImg[0].fadeIn(100);

    var previewIndex = $(this).index('.iou-gallery-slider-preview img');
    currentIndex[0] = previewIndex;
});

previewImgBoard.on('click', function () {
    var src = $(this).attr('src');

    bigImg[1].fadeOut(100, function () {
        bigImg[1].attr('src', src);
    });
    bigImg[1].fadeIn(100);

    var previewIndex = $(this).index('.iou-gallery-slider-preview img');
    currentIndex[1] = previewIndex;
});

for(let i = 0; i < arrowLeft.length; i++)
{
    arrowRight[i].addEventListener('click', function () {
        if (currentIndex[i] == previewImg[0].length - 1) {
            return;
        }
    
        var newImg = previewImg[i].eq(currentIndex[i] + 1);
        var newSrc = newImg.attr('src');
    
        bigImg[i].fadeOut(100, function () {
            bigImg[i].attr('src', newSrc);
        });
        bigImg[i].fadeIn(100);
    
        currentIndex[i]++;
    });
    
    arrowLeft[i].addEventListener('click', function () {
        if (currentIndex[i] == 0) {
            return;
        }
    
        var newImg = previewImg[i].eq(currentIndex[i] - 1);
        var newSrc = newImg.attr('src');
    
        bigImg[i].fadeOut(100, function () {
            bigImg[i].attr('src', newSrc);
        });
        bigImg[i].fadeIn(100);
    
        currentIndex[i]--;
    });
}