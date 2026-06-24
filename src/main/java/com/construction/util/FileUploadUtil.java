
package com.construction.util;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class FileUploadUtil {

    private static final String UPLOAD_DIR = "uploads/";

    public String uploadFile(MultipartFile file)
            throws IOException {

        if (!Files.exists(Paths.get(UPLOAD_DIR))) {
            Files.createDirectories(
                    Paths.get(UPLOAD_DIR)
            );
        }

        String fileName =
                System.currentTimeMillis()
                        + "_"
                        + file.getOriginalFilename();

        Path path =
                Paths.get(
                        UPLOAD_DIR + fileName
                );

        Files.copy(
                file.getInputStream(),
                path
        );

        return fileName;
    }
}
