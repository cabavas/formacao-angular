class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTittle = document.createElement("a");
        linkTittle.textContent = this.getAttribute("title");
        linkTittle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTittle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default.png";
        newsImage.alt = "Foto do Darth Vader"

        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 720px;
            -webkit-box-shadow: 7px 10px 18px -6px rgba(0,0,0,1);
            -moz-box-shadow: 7px 10px 18px -6px rgba(0,0,0,1);
            box-shadow: 7px 10px 18px -6px rgba(0,0,0,1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: rgb(70, 70, 70);
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_right > img {
            height: 150px;
            width: 150px;
        }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);