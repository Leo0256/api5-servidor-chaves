const { chaves } = require('../schemas');
const { SHA256 } = require('crypto-js');

class Models {

    /**
     * Gera uma nova chave de criptografia.
     * @returns {string}
     */

    static #genKey() {
        const salt = 10 ** 10;
        return SHA256(Math.floor(Math.random() * salt).toString()).toString();
    }

    /**
     * Gera uma nova chave e salva no banco.
     * @param {string} id 
     * @returns 
     */
    static async saveKey(id) {
        const key = this.#genKey();

        const find = await this.findKey(id)
        if(find) return find;

        return await chaves.create({
            chave_id: id,
            chave: key
        });
    }

    /**
     * Procura por uma chave.
     * @param {string} id 
     * @returns 
     */
    static async findKey(id) {
        return await chaves.findOne({ where: { chave_id: id }});
    }

    /**
     * Retorna todas as chaves.
     * @returns todas as chaves
     */
    static async getAll() {
        return await chaves.findAll();
    }

    /**
     * Deleta uma chave.
     * @param {string} id 
     */
    static async deleteKey(id) {
        return await chaves.destroy({ where: { chave_id: id } });
    }

    /**
     * Atualiza a chave.
     * @param {string} oldId 
     * @param {string} newId 
     */
    static async updateKey(oldId, newId) {

        // Se o id antigo for igual ao novo, retorna a chave atual
        if(oldId === newId) {
            return await this.findKey(oldId);
        }

        await this.deleteKey(oldId);
        return await this.saveKey(newId);
    }

}

module.exports = Models;