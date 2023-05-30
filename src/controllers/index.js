const Models = require("../models");

class Controller {

    /**
     * Gerencia o salvamento da chave
     * @param {Request} req 
     * @param {Response} res 
     */
    static async saveKey(req, res) {
        const {id} = req.body;
        
        await Models.saveKey(id)
            .then(result => res.json(result))
    }

    /**
     * Gerencia a busca pela chave
     * @param {Request} req 
     * @param {Response} res 
     */
    static async findKey(req, res) {
        const {id} = req.params;

        await Models.findKey(id)
            .then(result => res.json(result))
    }

    /**
     * Gerencia a busca por `todas` as chaves
     * @param {Request} req 
     * @param {Response} res 
     */
    static async getAll(req, res) {
        await Models.getAll()
            .then(result => res.json(result))
    }

    /**
     * Gerencia a deleção da chave 
     * @param {Request} req 
     * @param {Response} res 
     */
    static async deleteKey(req, res) {
        const {id} = req.params;

        await Models.deleteKey(id)
            .then(result => res.json(result))
    }

    /**
     * Gerencia a atualização da chave
     * @param {Request} req 
     * @param {Response} res 
     */
    static async updateKey(req, res) {
        const {oldId, newId} = req.body;
        await Models.updateKey(oldId, newId)
            .then(result => res.json(result))
    }
}

module.exports = Controller;