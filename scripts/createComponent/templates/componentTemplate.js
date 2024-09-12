const interfaceConst = "interface";

module.exports = (componentName) => `import { cn } from "@/shared/lib/cn";

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    
    return (
        <div className={cn(className)}>
           
        </div>
    );
};`;
