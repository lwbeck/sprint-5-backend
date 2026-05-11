import { UUID } from "crypto";

export class Room{
    private id: UUID; // Identificador único
    private description: string; // Nome da sala
    private accessLevel: number; // Nível mínimo necessário para entrar

    constructor(id: UUID, description: string, accessLevel: number) {
        this.id = id;
        this.description = description;
        this.accessLevel = accessLevel;
    }

    getId(): UUID { return this.id; }
    getDescription(): string { return this.description; }
    getAccessLevel(): number { return this.accessLevel; }

}