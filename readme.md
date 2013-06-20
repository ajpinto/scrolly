Scrolly 
==============

**Live example:** http://lab.victorcoulon.fr/javascript/scrolly/ (inspired by Nike Better World)

**HTML**

    <div id="item" class="parallax" data-vervel=".8" data-horvel=".8"></div>

You can add ``data-vfit="xx"`` and ``data-hfit="xx"`` to adjust your parallax in real conditions.

If it's a simple element, like an image.
    
    $('.parallax').scrolly();

If not:

    $('.parallax').scrolly({bgParallax: true});
    
    
    
    
######License
MIT Licence
