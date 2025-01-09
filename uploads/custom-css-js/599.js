<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
function form()
{
	setTimeout(function(){
		let targetNode=document.getElementsByName('object')[0];
		var config = { attributes: true };
		// Fonction callback à exécuter quand une mutation est observée
		var callback = function (mutationsList) {
		  for (var mutation of mutationsList) {
			if (mutation.type == "attributes") {
				if(targetNode.value=="animation")
				{
					document.getElementById('secteurCheck').style.display='block'	;
				}
				else
				{
					document.getElementById('secteurCheck').style.display='none';
				}	
			} 
		  }
		};

		// Créé une instance de l'observateur lié à la fonction de callback
		var observer = new MutationObserver(callback);

		// Commence à observer le noeud cible pour les mutations précédemment configurées
		observer.observe(targetNode, config);

	},500)
}

function updateValue(e) {
	 console.log(e)
	}	


document.addEventListener('DOMContentLoaded', form);</script>
<!-- end Simple Custom CSS and JS -->
