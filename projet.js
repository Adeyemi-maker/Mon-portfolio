<script>
    document.getElementById("avisForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let avis = document.getElementById("avis").value;
  let mailToLink = "mailto:mahudjroaureliensaizonou@gmail.com?subject=Avis%20lecteur&body=" + encodeURI(avis);
  window.location.href = mailToLink;
});

</script>