/*! Rappid v3.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2020-06-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


(function(joint, paper) {

    window.addEventListener('resize', joint.util.debounce(rescale), false);
    rescale();

    function rescale() {
        joint.ui.ContextToolbar.close();
        paper.scaleContentToFit({ padding: 50 });
    }

})(joint, window.paper);
