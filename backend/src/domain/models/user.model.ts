//domain/models

import type { UUID } from "crypto";
import * as bcrypt from "bcrypt";

export class User{
    private id: UUID; // Identificador único
    private name: string; // Nome do usuário
    private email: string; // Deve ser único e válido
    private password: string; // Armazenada com hash e salt (bcrypt ou argon2)
    private level: number; // int (1 a 5) 	Nível de acesso
    private profile_img: string; // Imagem em Base64
    private createdAt: number; // Gerado automaticamente
    private deletedAt: number | null; // Para deleção lógica

    constructor(id: UUID, name: string, email: string, password: string, level: number, profile_img: string) {
        this.id = id;

        if (!this.validateName(name)) throw new Error("Nome inválido");
        this.name = name;

        if (!this.validateEmail(email)) throw new Error("Email inválido");
        this.email = email;

        if (!this.validatePassword(password)) throw new Error("Senha inválida");
        this.password = password;
        this.hashPassword(); // Hash da senha ao criar o usuário

        if (!this.validateLevel(level)) throw new Error("Nível inválido");
        this.level = level;

        this.profile_img = profile_img;
        this.createdAt = Date.now();
        this.deletedAt = null;
    }

    //Getters
    getId(): UUID { return this.id; }
    getName(): string { return this.name; }
    getEmail(): string { return this.email; }
    getPassword(): string { return this.password; }
    getLevel(): number { return this.level; }
    getProfileImg(): string { return this.profile_img; }
    getCreatedAt(): number { return this.createdAt; }
    getDeletedAt(): number | null { return this.deletedAt; }

    //Metodos de hash e verificação de senha
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 10);
    }
    async verifyPassword(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.password);
    }

    //Metodos de validação
    validateName(name: string): boolean {return name.length > 0;}
    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    validateLevel(level: number): boolean {return level >= 1 && level <= 5;}
    validatePassword(password: string): boolean {return password.length >= 6;}

    // Métodos para atualizar os campos do usuário
    changeName(name: string): void {
        if (this.validateName(name)) this.name = name;
        else throw new Error("Nome inválido");
    }
    changeEmail(email: string): void {
        if (this.validateEmail(email)) this.email = email;
        else throw new Error("Email inválido");
    }
    changeLevel(level: number): void {
        if (this.validateLevel(level)) this.level = level;
        else throw new Error("Nível inválido");
    }
    async changePassword(password: string): Promise<void> {
        if (this.validatePassword(password)) {
            this.password = password;
            await this.hashPassword();
        } else throw new Error("Senha inválida");
    }
    changeProfileImg(profile_img: string): void {
        this.profile_img = profile_img;
    }

    delete(): void {
        this.deletedAt = Date.now();
    }
}