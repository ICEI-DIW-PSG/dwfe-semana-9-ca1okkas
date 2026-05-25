// ==========================================================
//  Mini Ecommerce — Catálogo em Cards
//  Atividade: Funções e Manipulação do DOM
// ==========================================================

// ── B.1  Base de dados (JSON) ────────────────────────────
const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15 Pro",
      preco: 7999.90,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
      descricao: "Titânio. Chip A17 Pro. Câmera 48 MP com zoom óptico 5×. Design ultra-resistente com Action Button personalizável.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24 Ultra",
      preco: 6799.00,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
      descricao: "Tela Dynamic AMOLED 6.8\", câmera 200 MP, caneta S Pen integrada e bateria de 5.000 mAh com IA generativa.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "MacBook Air M3",
      preco: 12499.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      descricao: "Chip Apple M3 de 8 núcleos, tela Liquid Retina 13.6\", até 18 h de bateria e apenas 1,24 kg.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Dell XPS 15",
      preco: 10299.00,
      categoria: "Notebooks",
      imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
      descricao: "Intel Core i7-13700H, RTX 4060, 16 GB RAM, SSD 512 GB, tela OLED 3.5 K com 60 Hz e cores deslumbrantes.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "AirPods Pro 2",
      preco: 1799.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1588156979435-379b9d8e73d6?w=400&q=80",
      descricao: "Cancelamento ativo de ruído de 2ª geração, audio espacial personalizado, bateria de até 30 h com o estojo.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Teclado Mecânico Keychron K2",
      preco: 499.90,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1524741659893-59eece5fbc39?w=400&q=80",
      descricao: "Layout compacto 75%, switches Brown, RGB por tecla, compatível com Windows e macOS, conexão Bluetooth 5.1.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "PlayStation 5 Slim",
      preco: 3999.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80",
      descricao: "Console PS5 versão Slim com leitor de disco, SSD de 1 TB, resolução 4K/120 fps e ray tracing em tempo real.",
      emEstoque: false
    },
    {
      id: 8,
      nome: "Xbox Series X",
      preco: 3799.00,
      categoria: "Games",
      imagem: "https://images.unsplash.com/photo-1621259182978-a1a12f2bdc42?w=400&q=80",
      descricao: "O Xbox mais potente já criado. 12 TFLOPS, SSD NVMe de 1 TB, Quick Resume e suporte nativo a 4K/120 fps.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Monitor LG UltraWide 34\"",
      preco: 2899.00,
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
      descricao: "Painel IPS 21:9, resolução 3440×1440, 144 Hz, AMD FreeSync Premium, HDR 400 e hub USB-C.",
      emEstoque: true
    },
    {
      id: 10,
      nome: "Motorola Edge 40 Pro",
      preco: 3299.00,
      categoria: "Celulares",
      imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
      descricao: "Snapdragon 8 Gen 2, tela pOLED 165 Hz, câmera 50 MP OIS, 125 W de carregamento e IP68.",
      emEstoque: true
    }
  ]
};

// ── B.2  Seleção de elementos do DOM ────────────────────
const productList    = document.getElementById("product-list");    // getElementById
const productDetails = document.getElementById("product-details"); // getElementById
const searchInput    = document.querySelector("#search");          // querySelector
const categorySelect = document.querySelector("#category");        // querySelector
const btnRender      = document.querySelector("#btnRender");       // querySelector

// ── B.3  Funções obrigatórias ────────────────────────────

/**
 * formatPrice — formata um número como moeda BRL.
 * @param {number} preco
 * @returns {string}  ex.: "R$ 1.999,90"
 */
function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/**
 * createProductCard — cria e retorna um elemento de card para o produto.
 * Usa: createElement, setAttribute, classList.add, style, appendChild
 * @param {Object} produto
 * @returns {HTMLElement}
 */
function createProductCard(produto) {
  // Elemento raiz do card
  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);          // setAttribute
  card.setAttribute("data-categoria", produto.categoria);
  card.classList.add("card");                          // classList.add
  card.style.transition = "border-color .2s, transform .2s, box-shadow .2s"; // style

  // Imagem
  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.setAttribute("loading", "lazy");

  // Corpo do card
  const body = document.createElement("div");
  body.classList.add("card-body");

  const cat = document.createElement("span");
  cat.classList.add("card-category");
  cat.textContent = produto.categoria;

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = produto.nome;

  const price = document.createElement("p");
  price.classList.add("card-price");
  price.textContent = formatPrice(produto.preco);

  const stock = document.createElement("p");
  stock.classList.add("card-stock");
  if (produto.emEstoque) {
    stock.classList.add("em-estoque");
    stock.textContent = "● Em estoque";
  } else {
    stock.classList.add("sem-estoque");
    stock.textContent = "● Sem estoque";
  }

  body.appendChild(cat);
  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(stock);

  // Ações
  const actions = document.createElement("div");
  actions.classList.add("card-actions");

  // Botão "Ver detalhes"
  const btnDetails = document.createElement("button");
  btnDetails.classList.add("btn-details");
  btnDetails.textContent = "Ver detalhes";
  btnDetails.addEventListener("click", () => showProductDetails(produto)); // addEventListener

  // Botão "Destacar"
  const btnHighlight = document.createElement("button");
  btnHighlight.classList.add("btn-highlight");
  btnHighlight.textContent = "★ Destacar";
  btnHighlight.addEventListener("click", () => {              // addEventListener
    card.classList.toggle("highlight");
    const isHighlighted = card.classList.contains("highlight");
    btnHighlight.textContent = isHighlighted ? "✕ Remover" : "★ Destacar";
    console.log(`[Destaque] Produto id=${produto.id} — destacado: ${isHighlighted}`);
  });

  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);

  card.appendChild(img);
  card.appendChild(body);
  card.appendChild(actions);

  return card;
}

/**
 * renderProducts — limpa a lista e renderiza os cards dos produtos.
 * Usa: innerHTML, appendChild
 * @param {Array} produtos
 */
function renderProducts(produtos) {
  productList.innerHTML = "";  // innerHTML

  if (produtos.length === 0) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    empty.innerHTML = "<span>🔍</span>Nenhum produto encontrado para estes filtros.";
    productList.appendChild(empty);
    return;
  }

  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);  // appendChild
  });

  // ── B.5  Uso obrigatório de querySelectorAll ────────
  const allCards = document.querySelectorAll(".card");  // querySelectorAll
  console.log(`[querySelectorAll] ${allCards.length} card(s) renderizado(s):`);
  allCards.forEach(c => {
    console.log(`  → data-id="${c.getAttribute("data-id")}"  categoria="${c.getAttribute("data-categoria")}"`);
  });
}

/**
 * renderCategories — popula o <select> com as categorias únicas dos produtos.
 */
function renderCategories() {
  // Mantém apenas a opção "Todas" e adiciona as demais
  categorySelect.innerHTML = '<option value="">Todas</option>';

  const cats = [...new Set(data.produtos.map(p => p.categoria))].sort();
  cats.forEach(cat => {
    const opt = document.createElement("option");
    opt.setAttribute("value", cat);
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

/**
 * showProductDetails — exibe os detalhes completos de um produto.
 * Usa: innerHTML, classList.add
 * @param {Object} produto
 */
function showProductDetails(produto) {
  const stockLabel = produto.emEstoque
    ? `<span style="color:#4caf50">● Em estoque</span>`
    : `<span style="color:#ff4f4f">● Sem estoque</span>`;

  productDetails.innerHTML = `
    <div class="details-inner">
      <img class="details-img" src="${produto.imagem}" alt="${produto.nome}" />
      <div class="details-info">
        <p class="details-cat">${produto.categoria}</p>
        <h2 class="details-name">${produto.nome}</h2>
        <p class="details-price">${formatPrice(produto.preco)}</p>
        <p class="details-stock">${stockLabel}</p>
        <p class="details-desc">${produto.descricao}</p>
      </div>
    </div>
  `;  // innerHTML

  productDetails.classList.add("active");  // classList.add

  // Rolar suavemente até os detalhes
  productDetails.scrollIntoView({ behavior: "smooth", block: "start" });

  console.log(`[Detalhes] Exibindo produto id=${produto.id}: ${produto.nome}`);
}

/**
 * filterProducts — lê os controles e retorna um array filtrado.
 * @returns {Array}
 */
function filterProducts() {
  const termo    = searchInput.value.trim().toLowerCase();
  const categoria = categorySelect.value;

  return data.produtos.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(termo) ||
                   p.descricao.toLowerCase().includes(termo);
    const catOk  = categoria === "" || p.categoria === categoria;
    return nomeOk && catOk;
  });
}

// ── B.4  Eventos ─────────────────────────────────────────

// Digitação no campo de busca → filtra em tempo real
searchInput.addEventListener("input", () => {       // addEventListener
  renderProducts(filterProducts());
});

// Mudança de categoria
categorySelect.addEventListener("change", () => {   // addEventListener
  renderProducts(filterProducts());
});

// Botão "Renderizar" → recarrega com filtros atuais
btnRender.addEventListener("click", () => {         // addEventListener
  renderProducts(filterProducts());
  console.log("[btnRender] Catálogo re-renderizado.");
});

// ── Inicialização ────────────────────────────────────────
renderCategories();
renderProducts(data.produtos);