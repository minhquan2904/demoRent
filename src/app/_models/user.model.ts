export class User {
    constructor(
        public username:       string,
        public email:          string,
        public firstname:      string,
        public lastname:       string,
        public rating: {
            level:             number;
            exp:               number;
            level_up_at:       Date;
        },
        public created_at:     Date
    ) {}
}
