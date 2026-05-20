# SimDuty Docs - Modelo de Conteudo

Use este arquivo como padrao para enviar texto e imagens das paginas de documentacao.

## Como preencher

- Copie o bloco `MODELO DE PAGINA` para cada pagina.
- Mantenha os nomes de arquivo em minusculas e com hifens.
- Use texto objetivo e direto, com passos claros.
- Se nao tiver algo pronto, deixe `TODO`.

---

## MODELO DE PAGINA

```text
[PAGINA]
slug: docs/<nome-da-pagina>.html
menu_label: <nome curto para menu>
status: MVP | Depois

[METADADOS]
titulo: <titulo da pagina>
resumo_curto: <1-2 frases>
objetivo_do_usuario: <o que a pessoa deve conseguir fazer ao final>

[SEO]
meta_title: <titulo SEO>
meta_description: <descricao SEO em ate ~155 caracteres>

[SECOES]
- h2: <titulo da secao>
  conteudo:
    - <paragrafo ou bullet 1>
    - <paragrafo ou bullet 2>

- h2: <titulo da secao>
  h3:
    - titulo: <subsecao>
      conteudo:
        - <item 1>
        - <item 2>

[PASSO A PASSO]
- passo: 1
  titulo: <acao>
  instrucoes:
    - <instrucao 1>
    - <instrucao 2>

- passo: 2
  titulo: <acao>
  instrucoes:
    - <instrucao 1>
    - <instrucao 2>

[FAQ]
- pergunta: <pergunta frequente>
  resposta: <resposta curta e pratica>

- pergunta: <pergunta frequente>
  resposta: <resposta curta e pratica>

[ERROS COMUNS]
- problema: <sintoma>
  causa_provavel: <causa>
  como_resolver:
    - <acao 1>
    - <acao 2>

[IMAGENS]
- arquivo: <nome-final.webp>
  pagina_secao: <pagina + secao onde entra>
  legenda: <texto curto da imagem>
  alt: <texto acessivel descritivo>
  prioridade: Alta | Media | Baixa

- arquivo: <nome-final.webp>
  pagina_secao: <pagina + secao onde entra>
  legenda: <texto curto da imagem>
  alt: <texto acessivel descritivo>
  prioridade: Alta | Media | Baixa

[I18N]
chave_base: <prefixo ex: docs_primeiro_uso>
texto_origem: pt-br
traduzir_para: en, es, ru
observacoes: <termos que nao devem ser traduzidos>
```

---

## Sugestao de paginas iniciais (MVP)

```text
- docs/index.html (hub da documentacao)
- docs/first-run.html
- docs/hos.html
- docs/relatorios.html
- docs/erros-comuns.html
```

## Convencao de nomes de imagens

```text
docs-<pagina>-<contexto>.webp

Exemplos:
- docs-primeiro-uso-conexao.webp
- docs-hos-dashboard.webp
- docs-erros-plugin-nao-detectado.webp
```

## Checklist antes de enviar

- Texto da pagina completo (ou marcado com TODO)
- FAQ com pelo menos 3 perguntas
- Pelo menos 1 imagem por secao principal
- `alt` preenchido em todas as imagens
- Status da pagina definido (MVP/Depois)
