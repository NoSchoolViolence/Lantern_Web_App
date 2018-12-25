//case study behavior 
  const dataset = [
    {
      name: 'bullied'
    }, {
      id: "1",
      name: "bullied, poor grades",
      listOfViolence: [
          {
            name: "Fighting",
            percentage: 65,
            description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
            link: 'placeholder'
          }, {
            name: "Stealing",
            percentage: 55,
            description: "sexual harassment Vivamus commodo leo et ex tempus, a placerat elit molestie. Mauris eget vulputate nisi. Nulla aliquam sit amet ligula luctus fermentum. Vivamus ligula tellus, suscipit non dignissim quis, accumsan at massa. In ipsum lectus, scelerisque sit amet tempus quis, consectetur sit amet lectus. Morbi interdum dui nec nisi molestie, sed gravida velit cursus. Morbi vel feugiat est. Curabitur vitae imperdiet lacus. Morbi porta, est vel iaculis volutpat, elit ex ullamcorper risus, vel condimentum metus purus non odio.",
            link: 'placeholder'
          }, {
            name: "Drug Use",
            percentage: 44,
            description: "sexual harassment Vivamus commodo leo et ex tempus, a placerat elit molestie. Mauris eget vulputate nisi. Nulla aliquam sit amet ligula luctus fermentum. Vivamus ligula tellus, suscipit non dignissim quis, accumsan at massa. In ipsum lectus, scelerisque sit amet tempus quis, consectetur sit amet lectus. Morbi interdum dui nec nisi molestie, sed gravida velit cursus. Morbi vel feugiat est. Curabitur vitae imperdiet lacus. Morbi porta, est vel iaculis volutpat, elit ex ullamcorper risus, vel condimentum metus purus non odio.",
            link: 'placeholder'
          }, {
            name: 'Weapon',
            percentage: 23,
            description: "sexual harassment Vivamus commodo leo et ex tempus, a placerat elit molestie. Mauris eget vulputate nisi. Nulla aliquam sit amet ligula luctus fermentum. Vivamus ligula tellus, suscipit non dignissim quis, accumsan at massa. In ipsum lectus, scelerisque sit amet tempus quis, consectetur sit amet lectus. Morbi interdum dui nec nisi molestie, sed gravida velit cursus. Morbi vel feugiat est. Curabitur vitae imperdiet lacus. Morbi porta, est vel iaculis volutpat, elit ex ullamcorper risus, vel condimentum metus purus non odio.",
            link: 'placeholder'
          }
        ]
    }, {
      name: "bullied, poor grades, nazi interests",
      listOfViolence: [
        {
          name: "stealing",
          percentage: 65,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Making Threats",
          percentage: 60,
          description:"weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 44,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: "bullied, poor grades, nazi interests, leather coats",
      listOfViolence: [
        {
          name: "Weapons use",
          percentage: 87,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Making Threats",
          percentage: 76,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 44,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'single parent family'
    }, {
      name: 'single parent family, poor grades',
      listOfViolence: [
        {
          name: "Fighting",
          percentage: 66,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 55,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 44,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapon",
          percentage: 23,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'single parent family, poor grades, poor attendance, withdrawn, interest in columbine',
      listOfViolence: [
        {
          name: "Vandalism",
          percentage: 43,
          description: "Vandalism Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 39,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Sexual Harassment",
          percentage: 56,
          description: "Sexual Harassment Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 94,
          description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'secret journal, prozac medicated 60mg'
    }, {
      name: 'secret journal, prozac medicated 60mg, shy',
      listOfViolence: [
        {
          name: "Stealing",
          percentage: 55,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 27,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: "secret journal, prozac medicated 60mg, shy, facebook",
      listOfViolence: [
        {
          name: "Stealing",
          percentage: 55,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Making Threats",
          percentage: 54,
          description: "Making Threats Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Intimidation",
          percentage: 67,
          description: "intimidation Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'secret journal, prozac medicated 60mg, shy, facebook, destructive fantasies, broke up with girlfriend',
      listOfViolence: [
        {
          name: "Drug Use",
          percentage: 65,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 81,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 55,
          description: "Weapons Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: "single parent family, social anxiety, no friends",
      listOfViolence: [
        {
          name: "Stealing",
          percentage: 55,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 44,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'single parent family, social anxiety, no friends, socialization delays',
      listOfViolence: [
        {
          name: "Fighting",
          percentage: 43,
          description: "Fighting Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 39,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapon",
          percentage: 23,
          description: "Weapon Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'single parent family, social anxiety, no friends, socialization delays, suffered from anorexia',
      listOfViolence: [
        {
          name: "Making Threats",
          percentage: 60,
          description: "Making Threats Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 44,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 45,
          description: "Weapons Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'single parent family, social anxiety, no friends, socialization delays, suffered from anorexia, long black coat',
      listOfViolence: [
        {
          name: "Fighting",
          percentage: 43,
          description: "Fighting Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Ostracizing",
          percentage: 56,
          description: "Ostracizing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 96,
          description: "Weapons Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'adopted, kicked doors, cursed at teachers',
      listOfViolence: [
        {
          name: "Stealing",
          percentage: 55,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Gang Activities",
          percentage: 54,
          description: "Gang Activities Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 44,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'adopted, kicked doors, cursed at teachers, disruptive',
      listOfViolence: [
        {
          name: "Fighting",
          percentage: 60,
          description: "Fighting Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Drug Use",
          percentage: 55,
          description: "Drug Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Sexual Harassment",
          percentage: 53,
          description: "Sexual Harassment Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'adopted, kicked doors, cursed at teachers, disruptive, talking about guns',
      listOfViolence: [
        {
          name: "Making Threats",
          percentage: 60,
          description: "Making Threats Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Stealing",
          percentage: 44,
          description: "Stealing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 67,
          description: "Weapons Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }, {
      name: 'adopted, kicked doors, cursed at teachers, disruptive, talking about guns, backpack with bullets',
      listOfViolence: [
        {
          name: "Fighting",
          percentage: 43,
          description: "Fighting Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Ostracizing",
          percentage: 73,
          description: "Ostracizing Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }, {
          name: "Weapons Use",
          percentage: 98,
          description: "Weapons Use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
          link: 'placeholder'
        }
      ]
    }
  ]
// const dataset = [
//   {
//   id: "1",
//   dataName: "bullied, poor grades",
//   listOfViolenece: [
//     {
        
//         name: "fighting",
//         percentage: 65,
//         description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
//         link: 'placeholder'
      
//     }, 
//     {
        
//         name: "Stealing",
//         percentage: 65,
//         description: "weapons use Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
//         link: 'placeholder'
//     }
// ]
//   }
// ];
// const dataset = {
//   "bullied" : "not enough information",
//   "bullied, poor grades" : {
//     "fighting": 65,
//     "stealing": 55,
//     "drug use": 44,
//     "weapon": 23
//   },
//   "bullied, poor grades, nazi interests": {
//     "stealing": 65,
//     "making threats": 60,
//     "weapons use": 44
//   },
//   "bullied, poor grades, nazi interests, leather coats": {
//     "weapons use": 87,
//     "making threats": 76,
//     "stealing": 44
//   },
//   "single parent family": "not enough information",
//   "single parent family, poor grades": {
//     "fighting": 66,
//     "stealing": 55,
//     "drug use": 44,
//     "weapon": 23
//   },
//   "single parent family, poor grades, poor attendance, withdrawn, interest in columbine": {
//     "vandalism": 43,
//     "stealing": 39,
//     "sexual harassment": 56,
//     "weapons use": 94
//   },
// "secret journal, prozac medicated 60mg": "not enough information",
//   "secret journal, prozac medicated 60mg, shy": {
//     "stealing": 55,
//     "drug use": 27,
//   },



// ***************** REFACTORED UP TO THIS POINT ****************

//   "secret journal, prozac medicated 60mg, shy, facebook": {
//     "stealing": 55,
//     "making threats": 54,
//     "intimidation": 67
//   },
//   "secret journal, prozac medicated 60mg, shy, facebook, destructive fantasies, broke up with girlfriend": {
//     "drug use": 65,
//     "stealing": 81,
//     "weapons use": 89
//   },
//   "single parent family, social anxiety, no friends": {
//     "stealing": 55,
//     "drug use": 44,
//   },
//   "single parent family, social anxiety, no friends, socialization delays": {
//     "fighting": 43,
//     "drug use": 39,
//     "weapon": 23
//   },
//   "single parent family, social anxiety, no friends, socialization delays, suffered from anorexia": {
//     "making threats": 60,
//     "stealing": 44,
//     "weapons use": 45
//   },
//   "single parent family, social anxiety, no friends, socialization delays, suffered from anorexia, long black coat": {
//     "fighting": 43,
//     "ostracizing": 56,
//     "weapons use": 96
//   },
//   "adopted, kicked doors, cursed at teachers": {
//     "stealing": 55,
//     "gang activities": 54,
//     "drug use": 44,
//   },
//   "adopted, kicked doors, cursed at teachers, disruptive": {
//     "fighting": 60,
//     "drug use": 55,
//     "sexual harassement": 53
//   },
//   "adopted, kicked doors, cursed at teachers, disruptive, talking about guns": {
//     "making threats": 60,
//     "stealing": 44,
//     "weapons use": 67
//   },
//   "adopted, kicked doors, cursed at teachers, disruptive, talking about guns, backpack with bullets": {
//     "fighting": 43,
//     "ostracizing": 73,
//     "weapons use": 98
//   }
// };
export default dataset;