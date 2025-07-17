import SuperHero from "../models/SuperHero.mjs"
import IRepository from "./IRepository.mjs"

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findOne({id: id})
  }

  async obtenerTodos() {
    return await SuperHero.find({})
  }

  async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor })
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: 'Tierra',
      $expr: { $gte: [{ $size: '$poderes' }, 2] }
    })
  }
}

export default new SuperHeroRepository();
