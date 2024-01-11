import { Injectable } from '@nestjs/common';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';

@Injectable()
export class ObjectiveService {
  private obj = [{ id: 104, objective: 'increase sales',sponsor: 'shaphy'}]

  create(createObjectiveDto: CreateObjectiveDto){
    this.obj.push(createObjectiveDto);
    return 'This action adds a new objective';
  }

  findAll() {
    return this.obj; // Return all objectives
  }

  findOne(id: number) {
    const idToFind = id;
    const foundInstance = this.obj.find(obj => obj.id === idToFind);
    return foundInstance; // Return the found object, not the function
}


  update(id: number, updateObjectiveDto: UpdateObjectiveDto) {
    const indexToUpdate = this.obj.findIndex((o) => o.id === id);


    // Apply updates to the object at the found index
    Object.assign(this.obj[indexToUpdate],updateObjectiveDto ); // Use Object.assign for safer updates

    return this.obj[indexToUpdate];
    return `This action updates a #${id} objective`;
  }

  remove(id: number) {
    const indexToRemove = this.obj.findIndex((o) => o.id === id);
    this.obj.splice(indexToRemove, 1);
    return true;
    return `This action removes a #${id} objective`;
  }
}
