import superHeroRepository from '../repositories/SuperHeroRepository.mjs'

export async function obtenerSuperheroePorId(id) {
  return await superHeroRepository.obtenerPorId(id)
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos()
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30()
}

export async function agregarSuperheroe(superheroe) {
  return await superHeroRepository.agregar(superheroe)
}

export async function actualizarSuperheroePorId(id, atributos) {
  return await superHeroRepository.actualizar(id, atributos)
}

export async function eliminarSuperheroePorId(id) {
  return await superHeroRepository.eliminarPorId(id)
}

export async function eliminarSuperheroePorNombreSuperheroe(nombre) {
  return await superHeroRepository.eliminarPorNombre(nombre)
}