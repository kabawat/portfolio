"use client"
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Heading from '@/components/common/heading';
import skills from '@/data/skills';

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('frontSkills');
  const [copied, setCopied] = useState(false);

  // Hello World programs for different languages
  const helloWorldPrograms = {
    'HTML': {
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to HTML</p>
</body>
</html>`,
      language: 'html',
      extension: 'html'
    },
    'CSS': {
      code: `/* Hello World in CSS */
.hello-world {
    color: #007bff;
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
}

.hello-world::before {
    content: "Hello World!";
    display: block;
    font-weight: bold;
}`,
      language: 'css',
      extension: 'css'
    },
    'JavaScript': {
      code: `// Hello World in JavaScript
console.log("Hello World!");

// Function version
function sayHello() {
    return "Hello World!";
}

// Arrow function version
const helloWorld = () => {
    console.log("Hello World!");
    return "Hello World!";
};

// Call the function
helloWorld();`,
      language: 'javascript',
      extension: 'js'
    },
    'React Js': {
      code: `import React from 'react';

// Functional Component
const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Welcome to React!</p>
        </div>
    );
};

// Class Component
class HelloWorldClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Welcome to React!</p>
            </div>
        );
    }
}

export default HelloWorld;`,
      language: 'jsx',
      extension: 'jsx'
    },
    'Node Js': {
      code: `// Hello World in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}/\`);
});

// Simple console version
console.log('Hello World!');`,
      language: 'javascript',
      extension: 'js'
    },
    'Express Js': {
      code: `const express = require('express');
const app = express();
const PORT = 3000;

// Route to handle Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// JSON response
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`,
      language: 'javascript',
      extension: 'js'
    },
    'PHP': {
      code: `<?php
// Hello World in PHP
echo "Hello World!";

// Function version
function sayHello() {
    return "Hello World!";
}

// Call the function
echo sayHello();

// Class version
class HelloWorld {
    public function greet() {
        return "Hello World!";
    }
}

$hello = new HelloWorld();
echo $hello->greet();
?>`,
      language: 'php',
      extension: 'php'
    },
    'Python': {
      code: `# Hello World in Python
print("Hello World!")

# Function version
def say_hello():
    return "Hello World!"

# Call the function
print(say_hello())

# Class version
class HelloWorld:
    def greet(self):
        return "Hello World!"

# Create instance and call method
hello = HelloWorld()
print(hello.greet())`,
      language: 'python',
      extension: 'py'
    },
    'Java': {
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
    
    // Method version
    public static String sayHello() {
        return "Hello World!";
    }
    
    // Instance method
    public String greet() {
        return "Hello World!";
    }
}`,
      language: 'java',
      extension: 'java'
    },
    'C Language': {
      code: `#include <stdio.h>

int main() {
    printf("Hello World!\\n");
    return 0;
}

// Function version
void sayHello() {
    printf("Hello World!\\n");
}

// Call the function
int main() {
    sayHello();
    return 0;
}`,
      language: 'c',
      extension: 'c'
    },
    'C++': {
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}

// Function version
void sayHello() {
    cout << "Hello World!" << endl;
}

// Class version
class HelloWorld {
public:
    void greet() {
        cout << "Hello World!" << endl;
    }
};`,
      language: 'cpp',
      extension: 'cpp'
    },
    'C#': {
      code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello World!");
    }
    
    // Method version
    static string SayHello() {
        return "Hello World!";
    }
}

// Class version
public class HelloWorld {
    public string Greet() {
        return "Hello World!";
    }
}`,
      language: 'csharp',
      extension: 'cs'
    },
    'MongoDB': {
      code: `// Hello World in MongoDB
// Insert a document
db.hello.insertOne({
    message: "Hello World!",
    timestamp: new Date()
});

// Find the document
db.hello.findOne();

// Update the document
db.hello.updateOne(
    { message: "Hello World!" },
    { $set: { updated: true } }
);

// Delete the document
db.hello.deleteOne({ message: "Hello World!" });`,
      language: 'javascript',
      extension: 'js'
    },
    'MySQL': {
      code: `-- Hello World in MySQL
-- Create a table
CREATE TABLE hello_world (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO hello_world (message) VALUES ('Hello World!');

-- Select data
SELECT * FROM hello_world WHERE message = 'Hello World!';

-- Update data
UPDATE hello_world SET message = 'Hello World Updated!' WHERE id = 1;

-- Delete data
DELETE FROM hello_world WHERE message = 'Hello World Updated!';`,
      language: 'sql',
      extension: 'sql'
    },
    'GraphQL': {
      code: `# Hello World in GraphQL

# Schema definition
type Query {
    hello: String
}

# Resolver
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!";
        }
    }
};

# Query
query {
    hello
}

# Response
{
    "data": {
    "hello": "Hello World!"
  }
}`,
      language: 'graphql',
      extension: 'graphql'
    },
    'Bootstrap': {
      code: `<!-- Hello World with Bootstrap -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="display-4 text-primary">Hello World!</h1>
                <p class="lead">Welcome to Bootstrap</p>
            </div>
        </div>
    </div>
</body>
</html>`,
      language: 'html',
      extension: 'html'
    },
    'React Native': {
      code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorld = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HelloWorld;`,
      language: 'jsx',
      extension: 'jsx'
    },
    'styled Components': {
      code: `import styled from 'styled-components';

// Styled component
const HelloWorldContainer = styled.div\`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #007bff, #6c757d);
\`;

const HelloWorldText = styled.h1\`
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
\`;

// Component
const HelloWorld = () => {
    return (
        <HelloWorldContainer>
            <HelloWorldText>Hello World!</HelloWorldText>
        </HelloWorldContainer>
    );
};

export default HelloWorld;`,
      language: 'jsx',
      extension: 'jsx'
    },
    'Unity Game': {
      code: `using UnityEngine;

public class HelloWorld : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Hello World!");
    }
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("Hello World from Unity!");
        }
    }
    
    void OnGUI()
    {
        GUI.Label(new Rect(10, 10, 200, 20), "Hello World!");
    }
}`,
      language: 'csharp',
      extension: 'cs'
    }
  };

  const allSkills = [
    ...skills.frontSkills,
    ...skills.backendSkills,
    ...skills.Database,
    ...skills.other
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const copyToClipboard = async () => {
    if (selectedSkill) {
      const code = getCodeForSkill(selectedSkill.title).code;
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    }
  };

  const getCodeForSkill = (skillTitle) => {
    return helloWorldPrograms[skillTitle] || {
      code: `// Hello World in ${skillTitle}
console.log("Hello World!");`,
      language: 'javascript',
      extension: 'js'
    };
  };

  const highlightCode = (code, language) => {
    if (!code) return '';
    
    const lines = code.split('\n');
    return lines.map((line, index) => {
      let highlightedLine = line;
      
      switch (language) {
        case 'javascript':
        case 'js':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(function|const|let|var|if|else|for|while|return|import|export|class|extends|new|this|console\.log)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'python':
        case 'py':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/#.*$/g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(def|class|if|else|elif|for|while|return|import|from|print|self|True|False|None)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'java':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(public|private|protected|static|void|class|interface|extends|implements|new|this|super|return|if|else|for|while|System\.out\.println)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'c':
        case 'cpp':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(int|char|float|double|void|if|else|for|while|return|include|define|printf|cout|endl)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'csharp':
        case 'cs':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(public|private|protected|static|void|class|interface|using|namespace|new|this|return|if|else|for|while|Console\.WriteLine)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'php':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(<?php|function|class|public|private|protected|static|if|else|for|while|return|echo|new)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'html':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/<!--[\s\S]*?-->/g, '<span class="comment">$&</span>');
          // Handle DOCTYPE
          highlightedLine = highlightedLine.replace(/<!DOCTYPE[^>]*>/gi, '<span class="keyword">$&</span>');
          // Handle attributes and their values
          highlightedLine = highlightedLine.replace(/(\w+)=(["'])([^"']*)\2/g, '<span class="attribute">$1</span>=<span class="string">$2$3$2</span>');
          // Handle tags
          highlightedLine = highlightedLine.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, '<span class="tag">&lt;$1$2$3&gt;</span>');
          break;
          
        case 'css':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle values
          highlightedLine = highlightedLine.replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;');
          // Handle properties
          highlightedLine = highlightedLine.replace(/([a-zA-Z-]+)\s*:/g, '<span class="property">$1</span>:');
          // Handle selectors
          highlightedLine = highlightedLine.replace(/([.#]?[a-zA-Z][a-zA-Z0-9]*)\s*\{/g, '<span class="selector">$1</span> {');
          break;
          
        case 'sql':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/--.*$/g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|TABLE|ALTER|DROP|INDEX|PRIMARY|KEY|AUTO_INCREMENT|INT|VARCHAR|TIMESTAMP)\b/gi, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'jsx':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/\/\/.*$/g, '<span class="comment">$&</span>');
          highlightedLine = highlightedLine.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle JSX attributes
          highlightedLine = highlightedLine.replace(/(\w+)=(["'])([^"']*)\2/g, '<span class="attribute">$1</span>=<span class="string">$2$3$2</span>');
          // Handle JSX tags
          highlightedLine = highlightedLine.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, '<span class="tag">&lt;$1$2$3&gt;</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(function|const|let|var|if|else|for|while|return|import|export|class|extends|new|this|console\.log)\b/g, '<span class="keyword">$1</span>');
          // Handle numbers
          highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
          break;
          
        case 'graphql':
          // Handle comments first
          highlightedLine = highlightedLine.replace(/#.*$/g, '<span class="comment">$&</span>');
          // Handle strings
          highlightedLine = highlightedLine.replace(/(["'])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="string">$1$2$1</span>');
          // Handle keywords
          highlightedLine = highlightedLine.replace(/\b(type|Query|Mutation|Subscription|interface|enum|input|scalar|schema|extend)\b/g, '<span class="keyword">$1</span>');
          break;
      }
      
      return highlightedLine;
    }).join('\n');
  };

  return (
    <div className="interactive-skills-section">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
            <Heading title={'Interactive Skills Showcase'} />
            <p className="text-center desc-text" data-aos="zoom-in">
              Click on any skill to see a Hello World program in that technology. Experience the power of different programming languages and frameworks.
            </p>
          </Col>
        </Row>
        
        <Row className="mt-5 align-items-stretch">
          {/* Left Side - Skills List */}
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className="d-flex">
            <div className="skills-list-container flex-fill">
              <h4 className="skills-category-title">Programming Skills</h4>
              <div className="skills-grid">
                {allSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`skill-item ${selectedSkill?.title === skill.title ? 'active' : ''}`}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="skill-icon">
                      <Image
                        src={skill.icon}
                        alt={`${skill.title} skill icon`}
                        width={40}
                        height={40}
                        loading="lazy"
                      />
                    </div>
                    <div className="skill-name">{skill.title}</div>
                    <div className="skill-indicator"></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Right Side - Code Display */}
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className="d-flex">
            <div className="code-display-container flex-fill">
              <div className="code-header">
                <div className="code-tabs">
                  <div className="code-tab active">
                    <div className="tab-icon">📄</div>
                    {selectedSkill ? `${selectedSkill.title.toLowerCase()}.${getCodeForSkill(selectedSkill.title).extension}` : 'select-skill.js'}
                  </div>
                </div>
                <div className="code-controls">
                  <button 
                    className="copy-btn"
                    onClick={copyToClipboard}
                    title="Copy code"
                  >
                    {copied ? "✓" : "📋"}
                  </button>
                  <div className="control-btn close"></div>
                  <div className="control-btn minimize"></div>
                  <div className="control-btn maximize"></div>
                </div>
              </div>
              <div className="code-content">
                {selectedSkill ? (
                  <>
                    <div className="line-numbers">
                      {getCodeForSkill(selectedSkill.title).code.split('\n').map((_, index) => (
                        <div key={index}>{index + 1}</div>
                      ))}
                    </div>
                    <pre className="code-block">
                      <code className={`language-${getCodeForSkill(selectedSkill.title).language}`}>
                        {getCodeForSkill(selectedSkill.title).code}
                      </code>
                    </pre>
                  </>
                ) : (
                  <>
                    <div className="line-numbers">
                      <div>1</div>
                    </div>
                    <div className="code-placeholder">
                      <div className="placeholder-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <p>Click on any skill to see its Hello World program</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InteractiveSkills;
