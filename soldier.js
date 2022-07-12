let soldier = {
    name: "Jane",
    helth: 10,
    weapon: {
        nameWeapon: "M1911",
        numberOfRounds: 30
    },
    supplies: 3,

    toShot() {
        if (this.weapon.numberOfRounds != 0) {
            this.weapon.numberOfRounds--;
            console.log("Бах-Бах")
        } else {
            console.log("Обойма пуста. Перезарядитесь")
        }
    },
    toRecharge() {
        if (this.supplies > 0) {
            this.weapon.numberOfRounds = 30;
            this.supplies--;
            console.log("Перезарядка")
        }
        else {
            console.log("Не осталось препасов")
        }
    },
    toHurt() {
        if (this.helth > 0) {
            this.helth--;
        }
        else {
            console.log("Ты проиграл")
        }
    },
};
