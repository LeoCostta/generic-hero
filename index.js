class Hero {
    constructor(name, age, heroType) {
        this.name = name;
        this.age = age;
        this.heroType = heroType;
    }

    attack() {
        let attackDescription;
        switch (this.heroType) {
            case "mago":
                attackDescription = "usou magia";
                break;
            case "guerreiro":
                attackDescription = "usou espada";
                break;
            case "monge":
                attackDescription = "usou artes marciais";
                break;
            case "ninja":
                attackDescription = "usou shuriken";
                break;
            default:
                attackDescription = "atacou";
        }
        return `O ${this.heroType} atacou usando ${attackDescription}`;
    }
}

// Exemplo de uso:
const hero1 = new Hero("Skarvuska", 1000, "mago");
console.log(hero1.attack()); // Saída: "O mago atacou usando magia"

const hero2 = new Hero("Strubask", 35, "guerreiro");
console.log(hero2.attack()); // Saída: "O guerreiro atacou usando espada"
