using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [MaxLength(8)]
        public string Password { get; set; }
    }
}