// Verifica se há documentos abertos
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Verifica se há pranchetas no documento
    if (doc.layerSets.length == 0) {
        alert("O documento não contém pranchetas!");
    } else {
        // Percorre todas as pranchetas (grupos de camadas)
        for (var i = 0; i < doc.layerSets.length; i++) {
            var artboard = doc.layerSets[i]; // Obtém a prancheta atual

            // Percorre as camadas dentro da prancheta
            for (var j = 0; j < artboard.artLayers.length; j++) {
                var layer = artboard.artLayers[j];

                // Se a camada for um Objeto Inteligente, pegam o nome do arquivo
                if (layer.kind == LayerKind.SMARTOBJECT) {
                    var fileName = layer.name.split(".")[0]; // Remove a extensão
                    artboard.name = fileName; // Renomeia a prancheta
                    break; // Sai do loop ao encontrar a primeira imagem
                }
            }
        }

        alert("Pranchetas renomeadas com sucesso!");
    }
} else {
    alert("Nenhum documento aberto.");
}