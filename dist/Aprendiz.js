export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "universitario";
    NivelEducativo["POSGRADO"] = "posgrado";
})(NivelEducativo || (NivelEducativo = {}));
export class Aprendiz {
    constructor(nombre, apellidos, avatar, edad, nivelEducativo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
}
