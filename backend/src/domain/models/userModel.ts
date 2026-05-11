import { UUID } from "crypto";

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
        this.name = name;
        this.email = email;
        this.password = password;
        this.level = level;
        this.profile_img = profile_img;
        this.createdAt = Date.now();
        this.deletedAt = null;
    }

    getId(): UUID { return this.id; }
    getName(): string { return this.name; }
    getEmail(): string { return this.email; }
    getPassword(): string { return this.password; }
    getLevel(): number { return this.level; }
    getProfileImg(): string { return this.profile_img; }
    getCreatedAt(): number { return this.createdAt; }
    getDeletedAt(): number | null { return this.deletedAt; }

    changePassword(newPassword: string): void {
        if (!newPassword || newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        this.password = newPassword; // In a real application, hash the password before storing
    }

    markAsDeleted(): void {
        this.deletedAt = Date.now();
    }
}