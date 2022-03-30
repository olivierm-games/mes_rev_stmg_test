function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
           if(typeof mutations.addedNodes=="undefined" || mutations.addedNodes.length==0) resolve(document.querySelector(selector));

           mutations.addedNodes.find(node => {
             if(node.matchesSelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
             }
          });


            // if (document.querySelector(selector)) {
            //     resolve(document.querySelector(selector));
            //     observer.disconnect();
            // }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// function waitForElm(selector) {
//    let observer = new MutationObserver(mutations => {
//
//      for(let mutation of mutations) {
//        // examiner les nouveaux nœuds, y a-t-il quelque chose à mettre en évidence ?
//
//        for(let node of mutation.addedNodes) {
//          // nous ne suivons que les éléments, nous sautons les autres nœuds (par exemple les nœuds de texte)
//          if (!(node instanceof HTMLElement)) continue;
//
//          // vérifier que l'élément inséré est un extrait de code
//          if (node.matches(selector)) {
//             disconnect();
//            // Prism.highlightElement(node);
//          }
//
//          // ou peut-être qu'il y a un extrait de code quelque part dans son sous-arbre ?
//          // for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
//          //   Prism.highlightElement(elem);
//          // }
//        }
//      }
//
//    });
//
//    // let demoElem = document.getElementById('highlight-demo');
//
//    observer.observe(document.body, {childList: true, subtree: true});
// }
