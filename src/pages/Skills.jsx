import { useState, useEffect } from "react";
import { Cloud, Code, Palette, Settings, Bot, Database } from "lucide-react";
import Pane from "../ui/Pane";

export default function Skills() {
  const [selectedBucket, setSelectedBucket] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillBuckets = {
    aws: {
      title: "AWS & Cloud",
      color: "from-orange-500 to-yellow-500",
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-400",
      icon: Cloud,
      skills: [
        { name: "EC2", level: "Advanced", description: "Virtual servers and compute instances" },
        { name: "S3", level: "Advanced", description: "Object storage and static website hosting" },
        { name: "VPC", level: "Advanced", description: "Virtual private cloud networking" },
        { name: "IAM", level: "Advanced", description: "Identity and access management" },
        { name: "Lambda", level: "Intermediate", description: "Serverless compute functions" },
        { name: "CloudFormation", level: "Intermediate", description: "Infrastructure as Code templates" },
        { name: "Route 53", level: "Intermediate", description: "DNS and domain management" },
        { name: "RDS", level: "Intermediate", description: "Managed relational databases" },
        { name: "CloudWatch", level: "Intermediate", description: "Monitoring and logging service" },
        { name: "ELB", level: "Intermediate", description: "Elastic Load Balancing" },
        { name: "Auto Scaling", level: "Intermediate", description: "Automatic capacity scaling" },
        { name: "CloudFront", level: "Intermediate", description: "Content delivery network" },
        { name: "API Gateway", level: "Intermediate", description: "REST and WebSocket API management" },
        { name: "SQS", level: "Beginner", description: "Simple Queue Service messaging" },
        { name: "SNS", level: "Beginner", description: "Simple Notification Service" },
        { name: "DynamoDB", level: "Beginner", description: "NoSQL database service" },
        { name: "ECS", level: "Beginner", description: "Elastic Container Service" },
        { name: "EKS", level: "Beginner", description: "Elastic Kubernetes Service" },
        { name: "Fargate", level: "Beginner", description: "Serverless container compute" },
        { name: "Elastic Beanstalk", level: "Beginner", description: "Application deployment platform" },
        { name: "CodeCommit", level: "Beginner", description: "Git repository hosting" },
        { name: "CodeBuild", level: "Beginner", description: "Continuous integration service" },
        { name: "CodeDeploy", level: "Beginner", description: "Application deployment automation" },
        { name: "CodePipeline", level: "Beginner", description: "Continuous delivery service" },
        { name: "ElastiCache", level: "Beginner", description: "In-memory caching service" },
        { name: "Redshift", level: "Beginner", description: "Data warehouse service" },
        { name: "Athena", level: "Beginner", description: "Serverless query service" },
        { name: "Glue", level: "Beginner", description: "ETL and data catalog service" },
        { name: "EMR", level: "Beginner", description: "Big data processing platform" },
        { name: "Kinesis", level: "Beginner", description: "Real-time data streaming" },
        { name: "SageMaker", level: "Beginner", description: "Machine learning platform" },
        { name: "Rekognition", level: "Beginner", description: "Image and video analysis" },
        { name: "Comprehend", level: "Beginner", description: "Natural language processing" },
        { name: "Step Functions", level: "Beginner", description: "Serverless workflow orchestration" },
        { name: "Systems Manager", level: "Beginner", description: "Operational data and automation" },
        { name: "Secrets Manager", level: "Beginner", description: "Secrets and credentials management" },
        { name: "KMS", level: "Beginner", description: "Key Management Service encryption" },
        { name: "WAF", level: "Beginner", description: "Web Application Firewall" },
        { name: "Shield", level: "Beginner", description: "DDoS protection service" },
        { name: "GuardDuty", level: "Beginner", description: "Threat detection service" }
      ]
    },
    coding: {
      title: "Programming",
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-400",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced", description: "Backend and automation" },
        { name: "JavaScript", level: "Advanced", description: "Full-stack development" },
        { name: "TypeScript", level: "Intermediate", description: "Type-safe JS development" },
        { name: "Swift", level: "Beginner", description: "iOS app development" },
        { name: "SQL", level: "Intermediate", description: "Database queries and design" },
        { name: "Git", level: "Advanced", description: "Version control and collaboration" },
        { name: "Linux", level: "Intermediate", description: "Command line and system admin" },
        { name: "Docker", level: "Beginner", description: "Containerization" }
      ]
    },
    frontend: {
      title: "Frontend",
      color: "from-green-500 to-teal-500",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-400",
      icon: Palette,
      skills: [
        { name: "React", level: "Advanced", description: "Component-based UI library" },
        { name: "HTML5", level: "Advanced", description: "Semantic markup and structure" },
        { name: "CSS3", level: "Advanced", description: "Styling and animations" },
        { name: "TailwindCSS", level: "Advanced", description: "Utility-first CSS framework" },
        { name: "Vite", level: "Intermediate", description: "Build tool and dev server" },
        { name: "Responsive Design", level: "Advanced", description: "Mobile-first development" },
        { name: "UI/UX", level: "Intermediate", description: "User interface design" },
        { name: "Figma", level: "Beginner", description: "Design and prototyping" }
      ]
    },
    backend: {
      title: "Backend & DevOps",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-500/30",
      hoverColor: "hover:border-red-400",
      icon: Settings,
      skills: [
        { name: "Node.js", level: "Intermediate", description: "JavaScript runtime" },
        { name: "Express.js", level: "Intermediate", description: "Web application framework" },
        { name: "REST APIs", level: "Advanced", description: "API design and development" },
        { name: "MongoDB", level: "Beginner", description: "NoSQL database" },
        { name: "PostgreSQL", level: "Intermediate", description: "Relational database" },
        { name: "Terraform", level: "Intermediate", description: "Infrastructure as Code" },
        { name: "CI/CD", level: "Intermediate", description: "Automated deployment" },
        { name: "Networking", level: "Intermediate", description: "Network protocols and security" }
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      color: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-400",
      icon: Bot,
      skills: [
        { name: "Prompt Engineering", level: "Advanced", description: "" },
        { name: "ChatGPT", level: "Advanced", description: "" },
        { name: "Copilot", level: "Advanced", description: "" },
        { name: "Claude", level: "Beginner", description: "" },
        { name: "DeepSeek", level: "Beginner", description: "" },
      ]
    },
    data: {
      title: "Data & Analytics",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-400",
      icon: Database,
      skills: [
        { name: "SQL", level: "Intermediate", description: "Structured Query Language for databases" },
        { name: "MySQL", level: "Beginner", description: "Open-source relational database" },
        { name: "PostgreSQL", level: "Beginner", description: "Advanced open-source database" },
        { name: "SQLite", level: "Beginner", description: "Lightweight embedded database" },
        { name: "Database Normalization", level: "Beginner", description: "First, second, and third normal forms" },
        { name: "ER Diagrams", level: "Beginner", description: "Entity-relationship modeling" },
        { name: "Data Modeling", level: "Beginner", description: "Conceptual and logical data structures" },
        { name: "CRUD Operations", level: "Intermediate", description: "Create, read, update, delete operations" },
        { name: "Joins & Relationships", level: "Beginner", description: "Inner, outer, left, right joins" },
        { name: "Indexes", level: "Beginner", description: "Database performance optimization" },
        { name: "Data Types", level: "Intermediate", description: "Understanding various SQL data types" },
        { name: "Constraints", level: "Beginner", description: "Primary keys, foreign keys, constraints" }
      ]
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced": return "text-green-400 bg-green-400/10";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/10";
      case "Beginner": return "text-blue-400 bg-blue-400/10";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <div className="space-y-8">
      {/* Skill Buckets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillBuckets).map(([key, bucket], index) => {
          const IconComponent = bucket.icon;
          return (
            <div
              key={key}
              className={`group cursor-pointer transition-all duration-800 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${selectedBucket === key ? 'transform scale-105' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedBucket(selectedBucket === key ? null : key)}
            >
              <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border ${bucket.borderColor} ${bucket.hoverColor} shadow-xl hover:shadow-2xl p-8 transition-all duration-300 h-full group-hover:scale-[1.02] relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bucket.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="text-center relative z-10">
                  <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-14 h-14 mx-auto text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">{bucket.title}</h3>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${bucket.color} text-white mb-4 shadow-lg`}>
                    {bucket.skills.length} skills
                  </div>
                  <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
                    Click to explore skills
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Bucket Details */}
      {selectedBucket && (
        <div className="transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-4">
          <Pane>
            <div className="flex items-center gap-4 mb-8">
              {(() => {
                const IconComponent = skillBuckets[selectedBucket].icon;
                return <IconComponent className="w-10 h-10 text-white" />;
              })()}
              <div>
                <h3 className="text-2xl font-bold text-white">{skillBuckets[selectedBucket].title}</h3>
                <p className="text-zinc-400 text-sm">Detailed skill breakdown</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillBuckets[selectedBucket].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-left">{skill.name}</h4>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)} whitespace-nowrap flex-shrink-0`}>
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-zinc-400 text-sm leading-relaxed text-left">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedBucket(null)}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]"
            >
              Close Details
            </button>
          </Pane>
        </div>
      )}
    </div>
  );
}
