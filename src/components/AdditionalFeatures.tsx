
import { motion } from "framer-motion";

const additionalFeatures = [
  {
    title: "Smart Organization",
    description: "AI-powered categorization automatically sorts your clipboard items by type, making it easy to find what you need."
  },
  {
    title: "Keyboard Maestro",
    description: "Custom keyboard shortcuts and powerful text expansion features to boost your productivity."
  },
  {
    title: "Developer Ready",
    description: "Code syntax highlighting, regex search, and seamless integration with your development workflow."
  },
  {
    title: "Privacy First",
    description: "Your data never leaves your devices without encryption. Complete control over your clipboard history."
  }
];

const AdditionalFeatures = () => {
  return (
    <motion.div
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <h2 className="text-2xl font-bold mb-8">Why Choose CopyClipCloud?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {additionalFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="glass-panel p-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdditionalFeatures;
