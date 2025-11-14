class AuthDto {
  static authResponse(id, name, email, role) {
    return {
      id,
      name,
      email,
      role,
    };
  }
}

module.exports = AuthDto;
