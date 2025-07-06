# Renomeador de Pranchetas para Photoshop

Este script foi criado para automatizar o processo de renomear pranchetas em arquivos do Photoshop com base no nome das imagens inseridas como Objetos Inteligentes.

## 💡 Motivação

Durante um trabalho de edição de fotos para uma empresa, percebi que renomear manualmente cada prancheta com o nome da respectiva imagem seria um processo tedioso e propenso a erros. Para agilizar esse fluxo, desenvolvi este pequeno script para o Adobe Photoshop.

## ⚙️ Como Funciona

O script verifica o documento aberto e percorre todas as pranchetas (representadas por grupos de camadas). Dentro de cada prancheta, ele procura pela primeira camada do tipo **Smart Object** (Objeto Inteligente) e extrai o nome do arquivo (sem extensão). Esse nome é então usado para renomear a prancheta.

### 🧠 Lógica do Script

1. Verifica se há documentos abertos no Photoshop.
2. Garante que o documento contém pranchetas (grupos de camadas).
3. Para cada prancheta:
   - Procura a primeira camada que seja um Objeto Inteligente.
   - Extrai o nome do arquivo (sem a extensão).
   - Usa esse nome para renomear a prancheta.
4. Exibe um alerta ao final do processo.
