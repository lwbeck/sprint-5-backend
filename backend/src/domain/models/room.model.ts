//domain/models

import type { UUID } from "crypto";

export class Room{
    private id: UUID; // Identificador único
    private description: string; // Nome da sala
    private accessLevel: number; // Nível mínimo necessário para entrar

    constructor(id: UUID, description: string, accessLevel: number) {
        this.id = id;

        if (!this.validateDescription(description)) throw new Error("Descrição inválida");
        this.description = description;

        if (!this.validateAccessLevel(accessLevel)) throw new Error("Nível de acesso inválido");
        this.accessLevel = accessLevel;
    }
    
    //Getters
    getId(): UUID { return this.id; }
    getDescription(): string { return this.description; }
    getAccessLevel(): number { return this.accessLevel; }
    
    //Metodos de validação
    validateDescription(description: string): boolean {return description.length > 0;}
    validateAccessLevel(accessLevel: number): boolean {return accessLevel >= 1 && accessLevel <= 5;}
    
    //Metodos de atualização
    changeDescription(newDescription: string): void {
        if (!this.validateDescription(newDescription)) throw new Error("Descrição inválida");
        this.description = newDescription;
    }
    changeAccessLevel(newAccessLevel: number): void {
        if (!this.validateAccessLevel(newAccessLevel)) throw new Error("Nível de acesso inválido");
        this.accessLevel = newAccessLevel;
    }

}