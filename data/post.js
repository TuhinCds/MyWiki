const Posts = {
    AllPost: [
        {
            image: "image1.png",
            color: "white",
            title: "Lorem ipsum dolor sit amet consectetur. tuhin",
            blog: ` Lorem ipsum dolor sit <span class="mark blue-light">click mark</span> <button>click btn</button>  <a href="#">click link</a> amet consectetur adipisicing elit. Earum perferendis commodi porro libero nostrum minus iure fuga dolorem doloribus, vel eum dolore suscipit laboriosam dolores in ea sunt. Sunt, placeat. `,
            readingText: "",
            tag: ["reading", "top read"],
            link: "",
            links: [
                {
                    name: "https://fontawesome.com/icons/chevron-left?f=classic&s=solid",
                    link: "https://fontawesome.com/icons/chevron-left?f=classic&s=solid",
                    target: "",
                },
                {
                    name: "https://fontawesome.com/icons/chevron-left?f=classic&s=solid",
                    link: "https://fontawesome.com/icons/chevron-left?f=classic&s=solid",
                    target: "",
                },
                
            ]
        },
        {
            image: "",
            color: "white",
            title: "2 Lorem ipsum dolor sit amet consectetur.",
            blog: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
            readingText: "",
            tag: ["reading", "top read"],
            link: "",
            links: [
                
            ]
        },
        {
            image: "image2.png",
            color: "white",
            title: "",
            blog: `
            Binary Number System

The binary number system, also known as the base-2 numeral system, is a positional system that represents numeric values using only two symbols: 0 and 1. Each binary digit (bit) corresponds to a power of two. It underpins nearly all modern computing and digital electronics because of its compatibility with on–off electronic states.
Key facts

    Base: 2

    Digits used: 0 and 1

    Smallest information unit: Bit (binary digit)

    Grouping: 8 bits = 1 byte

    Primary domain: Computing, data storage, and digital communication

Structure and representation

Binary is a positional notation system: each bit’s value depends on its position. Starting from the right, each position represents powers of 2 (2⁰, 2¹, 2², …). For example, the binary number 1011₂ equals (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 11₁₀. Because it requires only two states, it aligns perfectly with digital circuits that register “on/off,” “high/low,” or “true/false” signals.
Role in computing and electronics

Binary provides the foundation for digital logic and data processing. Every type of information—numbers, characters, images, and sound—is encoded in binary form. Hardware components such as transistors and logic gates perform binary operations to execute calculations, control systems, and memory storage. Bits are combined into bytes and larger units (kilobytes, megabytes) to handle complex data structures.
Arithmetic and conversions

Operations in binary arithmetic mirror those in decimal arithmetic but use simple rules limited to 0 and 1.

    Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (carry 1).

    Subtraction, multiplication, and division follow analogous binary logic.
    Conversions between binary and other bases—decimal, octal, hexadecimal—are routine in computing. Each relies on the relationship between their base values (powers of 2, 8, or 16).

Historical and theoretical background

The modern binary system was formalized by 17th-century mathematician Gottfried Wilhelm Leibniz, though similar dual concepts appeared earlier in ancient Chinese texts such as the I Ching. Leibniz demonstrated that all numbers and logical propositions could be expressed using 0 and 1—a principle that later became essential to electronic computing. 
            `,
            readingText: "",
            tag: ["reading", "binary", "computer", ""],
            link: "",
            links: [
                
            ]
        },
    ]
}




export {Posts}



